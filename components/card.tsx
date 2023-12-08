import { FunctionComponent } from 'react'
import { Text } from './text';
import styles from './card.module.scss'
import { Tag } from './tag';

interface CardProps {
    title: string;
}

export const Card: FunctionComponent<CardProps> = props => {
    return (
        <div className={styles.card}>
            <Tag label='Bar' />
            <Text large accent>{props.title}</Text>
        </div>
    )
}
