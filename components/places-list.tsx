import { FunctionComponent } from 'react'
import styles from './places-list.module.scss'
import { Card } from './card'
import Places from '@/data/places.json'

export const PlacesList: FunctionComponent = () => {
    return (
        <div className={styles.cardList}>
            {Places.map(place =>
                <Card
                    key={place.id}
                    title={place.name}
                    recommendedBy={place.recommendedBy}
                    type={place.type}
                />
            )}
        </div>
    )
}
