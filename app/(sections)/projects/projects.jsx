"use client";
import React, { useState } from 'react';
import { text, TagFilters } from '@/app/utils/data';
import Header from '@/app/components/header/header';
import { styles } from './projectsStyles';
import Card from '@/app/components/card/card';
import Link from 'next/link';
import SeeMoreBtn from '@/app/components/seeMoreBtn/seeMoreBtn';

export default function Projects() {
    const minCards = 3;
    const maxCards = text.projects.list.length;

    const [showAll, setShowAll] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [tag, setTag] = useState(TagFilters[0]);

    const cardsToShow = showAll ? maxCards : minCards;

    return (
        <div id="Projects" style={styles.container}>
            <Header title={text.projects.title} />
            <div className='row py-3'>
                <div className="col-lg-9 d-md-flex justify-content-md-center p-1">
                    {
                        TagFilters.map((tagFilter, index) => (
                            <div
                                key={index}
                                onClick={() => setTag(tagFilter)}
                                className='text-center'
                                style={{
                                    ...styles.tag,
                                    ...(tag === tagFilter ? styles.tagHover : {})
                                }}
                            >
                                <h3 className='fs-6 fw-lighter'>{tagFilter}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className="col-lg-3 d-flex align-items-center p-1">
                    <input className='w-100 rounded-4 px-3 py-1 border-0' placeholder='Search' type="text" />
                </div>
            </div>
            <div className='row'>
                {text.projects.list.slice(0, cardsToShow).map((project, index) => (
                    <div key={index} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)} className='col-lg-4 col-md-6 rounded-4 mb-3' style={{ ...styles.card, ...(activeIndex === index ? styles.cardHover : {}) }}>
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.card}>
                            <Card project={project} />
                        </Link>
                    </div>
                ))}
            </div>
            {maxCards > minCards && (
                <SeeMoreBtn
                    showAll={showAll}
                    onToggle={() => setShowAll(prev => !prev)}
                />
            )}
        </div>
    );
}
