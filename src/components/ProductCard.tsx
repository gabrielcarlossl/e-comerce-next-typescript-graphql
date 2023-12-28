/* eslint-disable @next/next/no-img-element */
import { formatPrice } from '@/utils/formatPrice'
import { useRouter } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'
import { Divider } from './Divider'

type ProductCardProps = {
    image: string
    title: string
    price: number
    id: string
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
    cursor: pointer;
    &:hover{
        box-shadow:
        2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
        100px 100px 80px rgba(0, 0, 0, 0.07);
        transition: 0.5s ease-in-out;
    }
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
        padding: 8px 12px;
        width: 100%;
    }
`

const ProductCard = (props: ProductCardProps) => {
    const price = formatPrice(props.price)

    const router = useRouter()

    const handleNavigate = () => {
        router.push('/product?id=' + props.id)
    }
    return (
        <Card onClick={handleNavigate}>
            <img src={props.image} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <Divider />
                <p>{price}</p>
            </div>
        </Card>
    )
}

export default ProductCard