'use client'
import { useLocalStorage } from '@/hooks/useLocalStore';
import { CartIcon } from '@/icons/CartIcon';
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components';

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    color: #fff;
    left: 10px;
    top: 50%;
    margin-left: -10px;
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 10px;
`

const CartContainer = styled.div`
    position: relative;
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])
    const router = useRouter()
    const handleNavigate = () => {
        router.push('/cart')
    }
    return (
        <CartContainer onClick={handleNavigate}>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </CartContainer>
    )
}