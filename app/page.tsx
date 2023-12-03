import { siteTitle } from '@/data/site'
import styles from './page.module.css'
import { MapPinnedIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className={styles.main}>
      <MapPinnedIcon />
      <h1>Our Places</h1>
      <p>Hamburg</p>
    </main>
  )
}
