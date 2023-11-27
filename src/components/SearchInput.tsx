'use client'
import { SearchIcon } from '@/icons/SearchIcon';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

export const SearchInput = styled.input`
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 10px 16px;
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    width: 100%;
    color: var(--text-dark);
    border: none;

    @media (min-width: ${props => props.theme.desktopBreakPoint} ) {
        font-size: 14px;
        line-height: 22px;
    }

`
const InputContainer = styled.div`
    
    position: relative;
    width: 250px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${props => props.theme.desktopBreakPoint}) {
        width: 352px;
    }
`
// passando para o InputProps todas as propriedades que o input html normal recebe, ele está exentendo a classe InputHTMLAttributes,
// dessa forma é possível passar props do jeito que um input recebe
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handlechange: (value: string) => void
}

export function SearchInputWithIcon(props: InputProps){
    return(
        <InputContainer>
            <SearchInput onChange={(event) => props.handlechange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}

