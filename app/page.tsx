import { CardList } from '@/components/card-list'
import styles from './page.module.scss'
import { Card } from '@/components/card'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardList>
        <Card
          title='Möwe Sturzflug'
        />
        <Card
          title='Kleine Konditorei'
        />
      </CardList>
    </main>
  )
}
