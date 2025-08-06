import Header from '@/app/components/header/header'
import React from 'react'
import { text } from '@/app/utils/data'
import TimelineDots from '@/app/components/timeline/timelineDot'
import TimelineParagraph from '@/app/components/timeline/timelineParagraph'
import { styles } from './experienceStyles'

export default function Experience() {
    const expNo = text.experience.list.length;
    return (
        <div style={styles.container}>
            <Header title={text.experience.title} />
                {text.experience.list.map((exp, index) => (
                    <div className='row' key={index}>
                        <div className="col-1">
                            <TimelineDots index={index} expNo={expNo} exp={exp} />
                        </div>
                        <div className="col-11">
                            <TimelineParagraph exp={exp} />
                        </div>
                    </div>
                ))}
        </div>
    )
}
