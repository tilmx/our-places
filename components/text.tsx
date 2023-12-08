import { FunctionComponent, ReactNode } from 'react'
import styles from './text.module.scss'

interface TextProps {
    children?: ReactNode;
    accent?: boolean;
    large?: boolean;
}

export const Text: FunctionComponent<TextProps> = props => {
    return (
        <div className={[styles.text, (props.large ? styles.large : undefined), (props.accent ? styles.accent : undefined)].join(' ')}>
            {props.children}
        </div>
    )
}
