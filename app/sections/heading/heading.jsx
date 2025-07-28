"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { text } from '@/app/utils/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import  './headingStyles.module.css';

export default function Heading() {
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [githubHover, setGithubHover] = useState(false);
    const [emailHover, setEmailHover] = useState(false);

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
                    <a
                        href={text.heading.linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white d-flex align-items-center text-decoration-none"
                        onMouseEnter={() => setLinkedinHover(true)}
                        onMouseLeave={() => setLinkedinHover(false)}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        {
                            linkedinHover && (
                                <p className='ms-2'>{text.heading.linkedin.label}</p>
                            )
                        }

                    </a>
                    <a
                        href={text.heading.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white d-flex align-items-center text-decoration-none"
                        onMouseEnter={() => setGithubHover(true)}
                        onMouseLeave={() => setGithubHover(false)}
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        {
                            githubHover && (
                                <p className='ms-2'>{text.heading.github.label}</p>
                            )
                        }
                    </a>
                    <a
                        href={`mailto:${text.heading.email.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white d-flex align-items-center text-decoration-none"
                        onMouseEnter={() => setEmailHover(true)}
                        onMouseLeave={() => setEmailHover(false)}
                    >
                        <FontAwesomeIcon icon={faInbox} size="2x" />
                        {
                            emailHover && (
                                <p className={`ms-2 ${emailHover ? "label-animate" : "label-animate-hide"}`}>{text.heading.email.label}</p>
                            )
                        }
                    </a>
                </div>
            </div>

        </div>
    )
}
