import { PlacesList } from '@/components/places-list'
import styles from './page.module.scss'
import { Card } from '@/components/card'

export default function Home() {
  return (
    <main className={styles.main}>
      <PlacesList />
    </main>
  )
}
