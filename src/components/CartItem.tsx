/* eslint-disable @next/next/no-img-element */
'use client'
import { DeleteIcon } from '@/icons/DeleteIcon';
import { ProductInCart } from '@/types/product'
import { formatPrice } from '@/utils/formatPrice';
import React, { ChangeEvent } from 'react'
import styled from 'styled-components';

interface CartItemProps {
    product: ProductInCart
    handleUpdateQuantity(id: string, quantity: number): void
    handleDelete(id: string): void
}

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 210px;
    border-radius: 8px;
    background-color: white;
    width: 100%;
    img {
        max-height: 100%;
        max-width: 256px;
        border-radius: 8px 0 0 8px;
    }
    > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;


        padding: 16px 24px;
        height: 100%;
        width: 100%;
        color: var(--text-dark2);
        h4 {
            font-weight: 300;
            font-size: 20px;
            line-height: 150%;
        
        }
        p {
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            max-height: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            span {
                font-weight: 600;
                font-size: 16px;
                color: var(--shapes-dark);
            }
        }
    }
`

const SelectQuantity = styled.select`

    padding: 8px;
    border-radius: 8px;
    border: 2px solid #A8A8B3;
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 400;
`
const DeleteButton = styled.button`
    border:none;
    background: transparent;
`

const CartItem = ({ product, handleUpdateQuantity, handleDelete } : CartItemProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }
  return (
    <Item>
        <img src={product.image_url} alt={product.name} />
        <div>
            <div>
                <h4>{product.name}</h4>
                <DeleteButton aria-label='Deletar' onClick={() => handleDelete(product.id)}>
                    <DeleteIcon />
                </DeleteButton>
            </div>
            <p>{product.description}</p>
            <div>
                <SelectQuantity value={product.quantity} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </SelectQuantity>
                <span>{formatPrice(product.price_in_cents)}</span>
            </div>
        </div>
    </Item>
  )
}

export default CartItem