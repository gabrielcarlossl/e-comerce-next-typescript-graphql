import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { FilterContextProvider } from '@/contexts/filter-context'
import Defaultproviders from '@/components/default-providers'

const saira = Saira({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'E-Store',
  description: 'E-commerce web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Defaultproviders>
          <Header />
          {children}
        </Defaultproviders>
      </body>
    </html>
  )
}
