import { styles } from './timelineStyles';

export default function TimelineParagraph({ exp }) {
    return (
        <div className='pt-4' style={styles.paragraph}>
            <h5 className='fw-light fs-6'>{`${exp.duration.start} - ${exp.duration.end}`}</h5>
            <h3 className='pt-2'>{exp.title}</h3>
            <h4 className='fw-lighter fs-4'>{exp.company}</h4>
            <p className='py-2'>{exp.description}</p>
        </div>
    )
}