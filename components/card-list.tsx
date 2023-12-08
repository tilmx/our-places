import { FunctionComponent, ReactNode } from 'react'
import styles from './card-list.module.scss'
import { Card } from './card'
import { PlaceType } from '@/types'

export const CardList: FunctionComponent = () => {
    return (
        <div className={styles.cardList}>
            <Card
                title='Möwe Sturzflug'
                type={PlaceType.Bar}
            />
            <Card
                title='Kleine Konditorei'
                type={PlaceType.Cafe}
            />
        </div>
    )
}
