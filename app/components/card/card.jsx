"use client"
import React, { useState } from 'react'
import { styles } from './cardStyles';
import Image from 'next/image';

export default function Card({ project, index }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const trimText = (text, maxLength = 100) => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    return (
        <div style={styles.link} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
            <div className='rounded-4 p-2 mb-3' style={{ ...styles.card, ...(activeIndex === index ? styles.cardHover : {}) }}>
                <Image
                    src={project.photo}
                    alt={project.title}
                    width={300}
                    height={300}
                    className='rounded-4 mb-3'
                    style={styles.photo}
                />
                <div className='px-2 pb-2'>
                    <h2 className='fs-6'>{project.title}</h2>
                    <h3 className='fs-6 fw-lighter'>{project.date}</h3>
                    <p className='fs-6 fw-lighter pt-3 pb-2' style={styles.paragraph}>{trimText(project.description)}</p>
                    {
                        project.technologies && (
                            <div className='d-flex flex-wrap gap-2'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} style={styles.tag}>{tech}</span>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
