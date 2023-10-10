'use client'
import { useProducts } from '@/hooks/useProducts'
import React from 'react'
import ProductCard from './Product-card'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 32px;
  max-width: 100%;
  justify-content: center;
  margin-top: 32px;
`

const ProductsList = () => {
  const { data } = useProducts()
  return (
    <div>
      <ListContainer>

      {
        data?.map(((product) => <ProductCard title={product.name} price={product.price_in_cents} image={product.image_url} key={product.id} />))
      }
      </ListContainer>
    </div>
  )
}

export default ProductsList