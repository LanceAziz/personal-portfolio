"use client"
import React, { useState } from 'react'
import { styles } from './cardStyles';
import Image from 'next/image';

export default function Card({ project }) {

    return (
        <div>
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
                <p className='fs-6 fw-lighter pt-3 pb-2' style={styles.paragraph}>{project.description}</p>
                {
                    project.tags && (
                        <div className='d-flex flex-wrap gap-2'>
                            {project.tags.map((tech, index) => (
                                <span key={index} style={styles.tag}>{tech}</span>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
