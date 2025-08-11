import { styles } from './headerStyles'

export default function Header({ title }) {
    return (
        <div className='d-flex mb-3'>
            <h2 style={styles.header}>{title}</h2>
        </div>
    )
}
