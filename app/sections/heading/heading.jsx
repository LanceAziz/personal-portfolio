"use client";
import { useState } from 'react';
import Image from 'next/image';
import { text } from '@/app/utils/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './headingStyles.module.css';

export default function Heading() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='d-flex align-items-center mt-5 text-center gap-5'>
            <Image
                src={text.heading.photo}
                alt="My Photo"
                width={300}
                height={300}
                className='rounded-5'
            />
            <div className=''>
                <h1 className='fa-4x fw-bold'>{text.heading.name}</h1>
                <div className="border bt-white my-3"></div>
                <h2>{text.heading.title}</h2>
                <div className="d-flex justify-content-center gap-4 mt-4">
                    {text.heading.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className={`text-white d-flex align-items-center text-decoration-none`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <FontAwesomeIcon icon={link.icon} className={hoveredIndex === index && 'text-light-emphasis'} size="2x" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}
