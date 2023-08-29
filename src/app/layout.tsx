import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { FilterContextProvider } from '@/contexts/filter-context'

const saira = Saira({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E commerce web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
