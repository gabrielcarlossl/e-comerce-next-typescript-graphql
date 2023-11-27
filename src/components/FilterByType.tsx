'use client'
import { useFilter } from '@/hooks/useFilter'
import { FilterType } from '@/types/filter-types'
import React from 'react'
import { styled } from 'styled-components'

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: ${(props) =>
    props.selected ? '4px solid var(--orange-low)' : 'none'};
  list-style: none;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (min-width: ${(props) => props.theme.tabletBreakPoint} ) {
    font-size: 24px;
  }
`

const FilterByType = () => {
  const { type, setType } = useFilter()
  const handleChangeType = (value: FilterType) => {
    setType(value)
  }
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os Produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}

export default FilterByType
