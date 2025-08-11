"use client";
import { useState } from 'react';
import { text, TagFilters } from '@/app/utils/data';
import Header from '@/app/components/header/header';
import { styles } from './projectsStyles';
import Card from '@/app/components/card/card';
import Link from 'next/link';
import SeeMoreBtn from '@/app/components/seeMoreBtn/seeMoreBtn';
import Filters from '@/app/components/filters/filters';
import Search from '@/app/components/search/search';

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [tag, setTag] = useState(TagFilters[0]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = text.projects.list
        .filter(project => tag === TagFilters[0] || project.tags?.includes(tag))
        .filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (Array.isArray(project.tags) && project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    const minCards = 3;
    const maxCards = filteredProjects.length;
    const cardsToShow = showAll ? maxCards : minCards;

    return (
        <div id="Projects" style={styles.container}>
            <Header title={text.projects.title} />
            <div className='row pb-3'>
                <Filters tag={tag} setTag={setTag} />
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className='row'>
                {filteredProjects.slice(0, cardsToShow).map((project, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className='col-lg-4 col-md-6 rounded-4 mb-3'
                        style={{ ...styles.card, ...(activeIndex === index ? styles.cardHover : {}) }}
                    >
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
