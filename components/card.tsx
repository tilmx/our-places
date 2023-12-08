import { FunctionComponent } from 'react'
import { Text, TextSize } from './text';
import styles from './card.module.scss'
import { Tag } from './tag';
import { PlaceType } from '@/types';
import { getPlaceIcon, getPlaceLabel } from '@/utils';

interface CardProps {
    title: string;
    type: PlaceType;
}

export const Card: FunctionComponent<CardProps> = props => {
    return (
        <div className={styles.card}>
            <Tag icon={getPlaceIcon(props.type)} label={getPlaceLabel(props.type)} />
            <Text size={TextSize.Large} accent>{props.title}</Text>
        </div>
    )
}
