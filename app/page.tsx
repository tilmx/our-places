import { PlacesList } from '@/components/places-list'
import styles from './page.module.scss'
import { Wrapper } from '@/components/wrapper'
import { Text, TextSize } from '@/components/text'

export default function Home() {
  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.header}>
          <Text size={TextSize.Large}>Our favorite places in Hamburg</Text>
        </div>
        <PlacesList />
      </Wrapper>
    </main>
  )
}
