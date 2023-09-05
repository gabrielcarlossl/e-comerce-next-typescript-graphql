'use client'
import { useProducts } from '@/hooks/useProducts'
import React from 'react'

interface ProductsListProps {}

const ProductsList = (props: ProductsListProps) => {
    const { data } = useProducts()
    console.log(data) 
  return (
    <div>ProductsList</div>
  )
}

export default ProductsList