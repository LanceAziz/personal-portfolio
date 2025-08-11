import Header from '@/app/components/header/header'
import { text } from '@/app/utils/data'
import { styles } from './aboutStyles'

export default function About() {
    return (
        <div id="About" style={styles.container}>
            <Header title={text.about.title} />
            <p style={styles.paragraph}>{text.about.content.p1}</p>
            <p style={styles.paragraph}>{text.about.content.p2}</p>
        </div>
    )
}
