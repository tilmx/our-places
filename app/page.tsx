import { PlacesList } from '@/components/places-list'
import styles from './page.module.scss'
import { Wrapper } from '@/components/wrapper'
import { Text, TextSize } from '@/components/text'

export default function Home() {
    return (
        <>
            <div className={styles.header}>
                <Text size={TextSize.Small}>Our Places</Text>
                <Text size={TextSize.Large}>Embark on a culinary journey through Hamburg's heart. Discover hidden gems with our locals' favorite restaurants, bars, and cafés guide.</Text>
            </div>
            <main className={styles.main}>
                <Wrapper>
                    <PlacesList />
                </Wrapper>
            </main>
        </>
    )
}
