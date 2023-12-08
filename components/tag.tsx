import { FunctionComponent } from 'react'
import { Text } from './text';
import styles from './tag.module.scss'
import { CakeSliceIcon } from 'lucide-react';

interface TagProps {
    label: string;
}

export const Tag: FunctionComponent<TagProps> = props => {
    return (
        <div className={styles.tag}>
            <CakeSliceIcon />
            <Text>
                {props.label}
            </Text>
        </div>
    )
}
