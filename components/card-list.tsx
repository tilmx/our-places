import { FunctionComponent, ReactNode } from 'react'
import styles from './card-list.module.scss'

interface CardListProps {
    children?: ReactNode;
}

export const CardList: FunctionComponent<CardListProps> = props => {
    return (
        <div className={styles.cardList}>
            {props.children}
        </div>
    )
}
