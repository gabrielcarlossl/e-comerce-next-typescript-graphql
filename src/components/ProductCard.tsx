/* eslint-disable @next/next/no-img-element */
import { formatPrice } from '@/utils/formatPrice'
import React from 'react'
import styled from 'styled-components'

type ProductCardProps = {
    image: string
    title: string
    price: number
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;
    background: rgb(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;
    width: 256px;
    img{
        width: 256px;
        height: 300px;

    }
    h3{
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark2);
    }
    p{
        font-weight: 600;
        font-size: 14px;
        color: var(--shapes-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;
        > div{
            width: 228px;
            height: 1px;
            background: var(--shapes);
            margin: 8px 0;
            padding: 0;
        }
    }
`

const ProductCard = (props: ProductCardProps) => {
    const price = formatPrice(props.price)
    return (
        <Card>
            <img src={props.image} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}

export default ProductCard