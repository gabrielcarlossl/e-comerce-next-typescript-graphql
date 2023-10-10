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

const ArrowIconWrapper = styled.span`
    transform: rotate(0deg);
    transition: transform 0.2s ease;
    &.rotated {
        transform: rotate(180deg);
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
    z-index: 1;
    li {
        color: var(--text-dark);
        font-size: 14px;
        cursor: pointer;
    }
    li:hover {
        font-weight: bold;
    }
`

const FilterByPriority = (props: FilterByPriorityProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedPriority, setSelectedPriority] = useState<PriorityTypes | null>(null)
    const { setPriority } = useFilter()

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setSelectedPriority(value)
        setIsOpen(false)
    }

    const handleOpen = () => setIsOpen(prev => !prev)

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
            {selectedPriority !== null ? (
                (() => {
                if (
                    selectedPriority === PriorityTypes.NEWS ||
                    selectedPriority === PriorityTypes.BIGGEST_PRICE ||
                    selectedPriority === PriorityTypes.MINOR_PRICE ||
                    selectedPriority === PriorityTypes.POPULARITY
                ) {
                    switch (selectedPriority) {
                    case PriorityTypes.NEWS:
                        return 'Novidades';
                    case PriorityTypes.BIGGEST_PRICE:
                        return 'Preço: Maior - Menor';
                    case PriorityTypes.MINOR_PRICE:
                        return 'Preço: Menor - Maior';
                    case PriorityTypes.POPULARITY:
                        return 'Mais vendidos';
                    default:
                        return 'Organizar por';
                    }
                } else {
                    return 'Organizar por';
                }
                })()
            ) : (
                'Organizar por'
            )}
                <ArrowIconWrapper className={isOpen ? 'rotated' : ''}><ArrowDownIcon /></ArrowIconWrapper>
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
