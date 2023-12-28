'use client'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import ReturnButton from '@/components/ReturnButton'
import { useLocalStorage } from '@/hooks/useLocalStore'
import { Product, ProductInCart } from '@/types/product'
import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../../utils/formatPrice';
import CartItem from '@/components/CartItem'
import { Divider } from '@/components/Divider'

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    @media (min-width: ${props => props.theme.desktopBreakPoint}) {
        flex-direction: row;
    }
`

const CartListContainer = styled.div`
    
    margin-top: 24px;
    h3 {
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--text-dark2);
        line-height: 150%;
        margin-top: 24px;
    }

    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark2);
        span {
            font-weight: 600;
        }
    }
`

const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`
const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 8px;
    background: white;
    height: 100%;
    min-width: 352px;
    padding: 16px 24px;
    h1 {
        margin-bottom: 24px;
    }
    h3 {
        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark2);
        text-transform: uppercase;
        margin-bottom: 30px;
    }
    
`

const TotalItem = styled.div<{isBold: boolean}>`

display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
font-weight: ${props => props.isBold ? '600' : '400'};
font-size: 16px;
margin-bottom: 12px;
&:last-of-type {
    margin-top: 12px;
}
`
const FinishButton = styled.button`

color: white;
border-radius: 4px;
background: #51b853;
padding: 12px 12px;
width: 100%;
border: none;
margin-top: 40px;
cursor: pointer;
text-transform: uppercase;
font-size: 16px;
margin-bottom: 40px;
`

interface cartProps { }

const CartPage = (props: cartProps) => {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', [])
    const calculateTotal = (value: ProductInCart[]) => {
        // função para calcular o total, usando o reduce, o redunce recebe um call back e valor inicial, no callback recebe o valor atual que vai ser o 'sum' a soma
        // e o item será o item atual que está sendo percorrido pelo reduce, vai pegar o item.price_in_cents que é o preço do  produto e somar, adicionando ao 'sum'
        // o valor da soma
        
        return value.reduce((sum, item) => {
            const itemQuantity = item.quantity ?? 0
            return sum += (item.price_in_cents * itemQuantity)
        } ,0)
    }

    const cartTotal = formatPrice(calculateTotal(value))
    const deliveryFee = 2500
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity}
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }
    return (
        <DefaultPageLayout>
            <Container>
                <CartListContainer>
                    <ReturnButton navigate='/' />
                    <h3>Seu carrinho</h3>
                    <p>
                        Total de {value.length} {value.length === 1 ? 'produto' : 'produtos'}
                        <span>{cartTotal}</span>
                    </p>
                    <CartList>
                        {value.map((item) => {
                            return <CartItem key={item.id} handleUpdateQuantity={handleUpdateQuantity} handleDelete={handleDeleteItem} product={item} />
                        })}
                    </CartList>

                </CartListContainer>
                <CartResultContainer>
                        <h1>Resumo do pedido</h1>
                        <TotalItem isBold={false}>
                            <p>Subtotal de produtos</p>
                            <p>{cartTotal}</p>
                        </TotalItem>
                        <TotalItem isBold={false}>
                            <p>Entrega</p>
                            <p>{formatPrice(deliveryFee)}</p>
                        </TotalItem>
                        <Divider />
                        <TotalItem isBold={true}>
                            <p>Total</p>
                            <p>{cartTotalWithDelivery}</p>
                        </TotalItem>
                        <FinishButton>Finalizar</FinishButton>
                </CartResultContainer>
            </Container>
        </DefaultPageLayout>
    )
}

export default CartPage