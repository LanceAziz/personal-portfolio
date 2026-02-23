import { styles } from './timelineStyles';

export default function TimelineParagraph({ exp }) {
    return (
        <div className='pt-4' style={styles.paragraph}>
            <h5 className='fw-light fs-6'>{`${exp.duration.start} - ${exp.duration.end}`}</h5>
            <h3 className='pt-2'>{exp.title}</h3>
            <h4 className='fw-lighter fs-4'>{exp.company}</h4>
            {Array.isArray(exp.description) ? (
                <ol className='py-2 ps-3'>
                    {exp.description.map((point, index) => (
                        <li key={index} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                </ol>
            ) : (
                <p className='py-2' suppressHydrationWarning dangerouslySetInnerHTML={{ __html: exp.description }} />
            )}
        </div>
    )
}