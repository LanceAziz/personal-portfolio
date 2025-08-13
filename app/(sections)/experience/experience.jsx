"use client"
import Header from '@/app/components/header/header'
import { useState } from 'react'
import { text } from '@/app/utils/data'
import TimelineDots from '@/app/components/timeline/timelineDot'
import TimelineParagraph from '@/app/components/timeline/timelineParagraph'
import { styles } from './experienceStyles'
import SeeMoreBtn from '@/app/components/seeMoreBtn/seeMoreBtn'

export default function Experience() {
    const maxItems = text.experience.list.length;
    const minItems = 2;

    const [showAll, setShowAll] = useState(false);

    const itemsToShow = showAll ? maxItems : minItems;

    return (
        <div id="Experience" style={styles.container}>
            <Header title={text.experience.title} />
            {text.experience.list.slice(0, itemsToShow).map((exp, index) => (
                <div className='row' key={index}>
                    <div className="col-1">
                        <TimelineDots index={index} expNo={maxItems} exp={exp} />
                    </div>
                    <div className="col-11">
                        <TimelineParagraph exp={exp} />
                    </div>
                </div>
            ))}
            {maxItems > minItems && (
                <SeeMoreBtn showAll={showAll} setShowAll={setShowAll} />
            )}
        </div>
    );
}