import { FunctionComponent } from 'react'
import { Text, TextSize } from './text';
import styles from './card.module.scss'
import { Tag } from './tag';
import { getPersonImage, getPlaceIcon } from '@/utils';

interface CardProps {
    title: string;
    recommendedBy: string[];
    type: string;
}

export const Card: FunctionComponent<CardProps> = props => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <Tag icon={getPlaceIcon(props.type)} label={props.type} />
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
                </div >
            </div>
            <Text size={TextSize.Large} accent>{props.title}</Text>
        </div >
    )
}
