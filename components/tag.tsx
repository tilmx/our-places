import { FunctionComponent, ReactNode } from 'react'
import { Text } from './text';
import styles from './tag.module.scss'

interface TagProps {
    icon: ReactNode;
    label: string;
}

export const Tag: FunctionComponent<TagProps> = props => {
    return (
        <div className={styles.tag}>
            {props.icon}
            <Text>
                {props.label}
            </Text>
        </div>
    )
}
