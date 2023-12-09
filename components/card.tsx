import { FunctionComponent } from 'react'
import { Text, TextSize } from './text';
import styles from './card.module.scss'
import { getPersonImage, getPlaceIcon } from '@/utils';

interface CardProps {
    title: string;
    recommendedBy: string[];
    type: string;
    link?: string;
}

export const Card: FunctionComponent<CardProps> = props => {
    return (
        <a className={styles.card} href={props.link} target='_blank'>
            <div className={styles.type}>
                {getPlaceIcon(props.type)}
            </div>
            <Text size={TextSize.Large} accent>{props.title}</Text>
            <div className={styles.recommendedBy}>
                {props.recommendedBy.map((person, i) =>
                    <div className={styles.person} style={{ backgroundImage: `url(${getPersonImage(person)})` }} key={i}>
                        {!getPersonImage(person) &&
                            <Text>
                                {person.charAt(0)}
                            </Text>
                        }
                    </div>
                )}
            </div>
        </a>
    )
}
