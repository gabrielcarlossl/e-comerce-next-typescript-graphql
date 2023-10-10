"use client"

import React from 'react'
import { styled } from 'styled-components'

import { Saira_Stencil_One } from 'next/font/google'
import { SearchInputWithIcon } from './SearchInput'
import { CartControl } from './CartControl'
import { useFilter } from '@/hooks/useFilter'

const saira_stencil_one = Saira_Stencil_One({ subsets: ['latin'], weight: ['400'] })

interface HeaderProps { }

const CustomHeader = styled.header`
    
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 20px 160px;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    line-height: 150%;

`
const Header = (props: HeaderProps) => {
    const {setSearch, search} = useFilter()
    return (
        <CustomHeader>
            <Logo className={saira_stencil_one.className}>E-Commerce</Logo>
            <div>
                <SearchInputWithIcon value={search} handlechange={setSearch} placeholder='Procurando por algo específico?' />
                <CartControl />
            </div>
        </CustomHeader>
    )
}

export default Header