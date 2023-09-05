import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post('http://localhost:3333', {
        query: `query{
            allProducts{
              id
              name
              price_in_cents
              image_url
            }
          }`
    })
}

export function useProducts() {
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })
    return { data: data?.data?.data?.allProducts }
}