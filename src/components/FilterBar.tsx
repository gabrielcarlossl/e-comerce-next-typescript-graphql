'use client'
import React from 'react'
import FilterByType from './FilterByType'
import { styled } from 'styled-components'

interface FilterBarProps {}
const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
` 
const FilterBar = (props: FilterBarProps) => {
  return (
    <FilterContainer>
        <FilterByType/>
    </FilterContainer>
  )
}

export default FilterBar