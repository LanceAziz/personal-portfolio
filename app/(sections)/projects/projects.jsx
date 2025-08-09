"use client";
import React, { useState } from 'react';
import { text } from '@/app/utils/data';
import Header from '@/app/components/header/header';
import { styles } from './projectsStyles';
import Card from '@/app/components/card/card';
import Link from 'next/link';
import SeeMoreBtn from '@/app/components/seeMoreBtn/seeMoreBtn';

export default function Projects() {
    const minCards = 3;
    const maxCards = text.projects.list.length;

    const [showAll, setShowAll] = useState(false);

    const cardsToShow = showAll ? maxCards : minCards;

    return (
        <div id="Projects" style={styles.container}>
            <Header title={text.projects.title} />
            <div className='row'>
                {text.projects.list.slice(0, cardsToShow).map((project, index) => (
                    <div key={index} className='col-lg-4 col-md-6'>
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
