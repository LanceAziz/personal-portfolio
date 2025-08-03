import Header from '@/app/components/header/header'
import React from 'react'
import { text } from '@/app/utils/data'
import { styles } from './aboutStyles'

export default function About() {
    return (
        <div style={styles.container}>
            <Header title={text.about.title} />
            <p style={styles.paragraph}>{text.about.content.p1}</p>
            <p style={styles.paragraph}>{text.about.content.p2}</p>
        </div>
    )
}
