import { FunctionComponent, ReactNode } from 'react'
import styles from './text.module.scss'

interface TextProps {
    children?: ReactNode;
    accent?: boolean;
    size?: "small" | "regular" | "large";
}

export const Text: FunctionComponent<TextProps> = props => {
    return (
        <div className={[styles.text, props.size].join(' ')}>
            {props.children}
        </div>
    )
}
