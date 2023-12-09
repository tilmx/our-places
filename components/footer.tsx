import { FunctionComponent } from 'react'
import styles from './footer.module.scss'
import { Wrapper } from './wrapper'
import { Text } from './text'

export const Footer: FunctionComponent = () => {
    return (
        <Wrapper>
            <div className={styles.footer}>
                <a href="/legal/sites-notice">
                    <Text>Site's notice</Text>
                </a>
                <a href="/legal/privacy-policy">
                    <Text>Privacy Policy</Text>
                </a>
            </div>
        </Wrapper>
    )
}
