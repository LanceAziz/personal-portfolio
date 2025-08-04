import Header from '@/app/components/header/header'
import React from 'react'
import { text } from '@/app/utils/data'
import { styles } from './experienceStyles'

export default function Experience() {
    return (
        <div>
            <Header title={text.experience.title} />
            <div className="timeline-container">
                {text.experience.list.map((exp, index) => (
                    <div style={styles.timelineItem} key={index}>
                        <div style={styles.timelineIcon}>
                            {exp.isCurrent ? "✅" : "🔗"}
                        </div>
                        <div style={styles.timelineContent}>
                            <span style={styles.timelineDate}>
                                {exp.duration.start} - {exp.duration.end}
                            </span>
                            <h3 style={styles.timelineTitle}>{exp.title}</h3>
                            <h4 style={styles.timelineCompany}>{exp.company}</h4>
                            <p style={styles.timelineDescription}>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
