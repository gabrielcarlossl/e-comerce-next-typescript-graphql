'use client'
import { ReturnIcon } from '@/icons/ReturnIcon'
import { useRouter } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

interface ReturnButtonProps {
    navigate: string
}

const ReturnButtonContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
color: var(--text-dark3);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%;
background: transparent;
border: none;
cursor: pointer;
&:hover{
    font-weight: 600;
}
`
function ReturnButton({navigate}: ReturnButtonProps) {
    const router = useRouter()
    const handleNavigate = () => {
        router.push(navigate)
    }
  return (
    <ReturnButtonContainer onClick={handleNavigate}>
        <ReturnIcon/>
        Voltar
    </ReturnButtonContainer>
  )
}

export default ReturnButton