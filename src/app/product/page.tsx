/* eslint-disable jsx-a11y/alt-text */
'use client'

import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import ReturnButton from '@/components/ReturnButton'
import { useProduct } from '@/hooks/useProduct'
import { BagIcon } from '@/icons/BagIcon'
import { formatPrice } from '@/utils/formatPrice'
import React from 'react'
import styled from 'styled-components'

interface ProductProps { }

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  section{
    display: flex;
    margin-top: 24px;
    justify-content: center;
    width: 100%;
    gap: 32px;
    img{
      max-width: 640px;
      width: 50%;
    }
    > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            button {
                background: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                text-transform: uppercase;
                max-width: 448px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                &:hover{
                  background: #0b3a57;
                  transition: 0.5s ease-in-out;
                }
            }
        }
    
  }
`
const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-top: 12px;
    }

    span:nth-of-type(2){
        font-weight: 600;
        font-size: 20px;
        color: var(--shapes-dark);
        margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--text-dark);
        margin-top: 24px;
    }

    div {
        margin-top: 58px;

        h3 {
            text-transform: uppercase;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 16px;
        }

        p {
            font-size: 14px;
            max-width: 448px;
        }
    }
`

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useProduct(searchParams.id)
  return (
    <DefaultPageLayout>
      <Container>
        <ReturnButton navigate='/' />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <BagIcon/>
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}

export default Product
