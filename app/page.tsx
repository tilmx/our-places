import { PlacesList } from '@/components/places-list'
import styles from './page.module.scss'
import { Wrapper } from '@/components/wrapper'

export default function Home() {
  return (
    <main className={styles.main}>
      <Wrapper>
        <PlacesList />
      </Wrapper>
    </main>
  )
}
