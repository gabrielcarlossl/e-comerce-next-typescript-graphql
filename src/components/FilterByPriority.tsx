import { ArrowDownIcon } from '@/icons/ArrowDownIcon'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useFilter } from '../hooks/useFilter';
import { PriorityTypes } from '@/types/priority-types';

interface FilterByPriorityProps { }

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    button {
        border: none;
        font-family: inherit;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        cursor: pointer;
        gap: 16px;
    }

`

const PriorityFilter = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 4px 12px rgba(0,0,0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    list-style: none;
    max-width: 200px;
    white-space: nowrap;
    width: fit-content;
    top: 100%;
    gap: 4px;
    li {
        color: var(--text-dark);
        font-size: 14px;
        cursor: pointer;
    }
`

const FilterByPriority = (props: FilterByPriorityProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const {setPriority} = useFilter()

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    const handleOpen = () => setIsOpen(prev => !prev)
    return (
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por <ArrowDownIcon />
            </button>

            {isOpen && <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>}
        </FilterContainer>
    )
}

export default FilterByPriority