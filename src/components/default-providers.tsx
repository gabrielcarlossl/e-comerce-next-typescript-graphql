'use client'
import { FilterContextProvider } from '@/contexts/filter-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react';

interface DefaultProvidersProp {
    children: ReactNode
}
const theme = {
    desktopBreakPoint: '768px'
}
const Defaultproviders = ({children}: DefaultProvidersProp) => {
    const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default Defaultproviders