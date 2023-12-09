import { Metadata } from 'next'
import { siteTitle } from '@/data/site'
import { Text, TextSize } from '@/components/text'
import { Wrapper } from '@/components/wrapper'

export const metadata: Metadata = {
    title: `${siteTitle} — Site's notice`,
    robots: 'noindex'
}

export default function SitesNotice() {
    return (
        <Wrapper>
            <Text>Site's notice</Text>
            {process.env.NEXT_PUBLIC_SITESNOTICE_ADDRESS?.split(', ').map((text, i) =>
                <Text size={TextSize.Large} key={i}>{text}</Text>
            )}
            <br />
            <Text size={TextSize.Large}>{process.env.NEXT_PUBLIC_SITESNOTICE_EMAIL}</Text>
            <Text size={TextSize.Large}>{process.env.NEXT_PUBLIC_SITESNOTICE_PHONE}</Text>
        </Wrapper>
    )
}
