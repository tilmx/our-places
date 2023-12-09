import { FunctionComponent, ReactNode } from "react";
import { Text } from "./text";
import styles from './table-text.module.scss'

export const TableText: FunctionComponent<{ children?: ReactNode; title?: string; }> = props => {
    return (
        <div className={styles.table}>
            <Text>{props.title}</Text>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}