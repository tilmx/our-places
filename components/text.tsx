import { FunctionComponent, ReactNode } from 'react'
import styles from './text.module.scss'

interface TextProps {
    children?: ReactNode;
    accent?: boolean;
    size?: TextSize;
}

export enum TextSize {
    Small = "small",
    Regular = "regular",
    Large = "large"
}

export const Text: FunctionComponent<TextProps> = props => {
    return (
        <div className={[styles.text, props.size && styles[props.size], (props.accent ? styles.accent : undefined)].join(' ')}>
            {props.children}
        </div>
    )
}
