import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from './timelineStyles';

export default function TimelineDots({ index, expNo, exp }) {
    return (
        <div className='mt-4 d-flex flex-column align-items-center h-100'>
            <FontAwesomeIcon style={styles.dotMargin} icon={exp.isCurrent ? faCircleDot : faCircle} />
            {
                expNo !== index + 1 && (
                    <div style={styles.verticaline}></div>
                )
            }
        </div >
    )
}
