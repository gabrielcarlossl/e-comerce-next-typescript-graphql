/* eslint-disable jsx-a11y/alt-text */
'use client'

import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import ReturnButton from '@/components/ReturnButton'
import { useProduct } from '@/hooks/useProduct'
import React from 'react'
import styled from 'styled-components'

interface ProductProps {}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
    const { data } = useProduct(searchParams.id)
    console.log(data)
  return (
    <DefaultPageLayout>
      <Container>
        <ReturnButton navigate='/' />
        <section>
            <img src={data?.image_url}/>
            <div>
                <span>{data?.category}</span>
                <h2>{data?.name}</h2>
                <span>{data?.price_in_cents}</span>
                <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                <div>
                    <h3>Descrição</h3>
                    <p>{data?.description}</p>
                </div>
            </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}

export default Product
