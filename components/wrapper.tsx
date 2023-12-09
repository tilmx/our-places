import { FunctionComponent, ReactNode } from 'react'
import styles from './wrapper.module.scss'

export const Wrapper: FunctionComponent<{ children?: ReactNode }> = props => {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}
