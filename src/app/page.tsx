'use client'
import styles from './page.module.css'
import FilterBar from '@/components/FilterBar'
import ProductsList from '@/components/Products-list'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  )
}
