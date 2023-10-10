import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphql-filters';
import { useDeferredValue } from 'react';


const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post('http://localhost:3333', { query })
}

export function useProducts() {
    const { type, priority, search } = useFilter() 
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    })
    const products = data?.data?.data?.allProducts 
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    return { data: filteredProducts }
}