"use client";
import { useState } from 'react';
import Image from 'next/image';
import { text } from '@/app/utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from './headingStyles';
import Divider from '@/app/components/divider/divider.jsx';

export default function Heading() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='row align-items-center mt-1 text-center'>
            <div className="col-md-5">
                <Image
                    src={text.heading.photo}
                    alt="My Photo"
                    width={300}
                    height={300}
                    className='rounded-5'
                    style={styles.photo}
                />
            </div>
            <div className='col-md-7 py-4 px-5 d-flex justify-content-center flex-column align-items-center'>
                <h1 className='fa-4x fw-bold'>{text.heading.name}</h1>
                <Divider width='90%' borderWidth={"1px"} />
                <h2 style={{ fontWeight: 'lighter' }}>{text.heading.title}</h2>
                <div className="d-flex justify-content-center gap-4 mt-4">
                    {text.heading.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-white d-flex align-items-center text-decoration-none`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <FontAwesomeIcon icon={link.icon}
                                style={{
                                    ...styles.icon,
                                    ...(hoveredIndex === index ? styles.iconHover : {})
                                }}
                                size="2x" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
