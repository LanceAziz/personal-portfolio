"use client"
import { useState } from 'react'
import Header from '@/app/components/header/header.jsx'
import { text } from '../../utils/data.js'
import { styles } from './servicesStyles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useProjects } from '@/app/context/projectsContext.jsx'
import { Link } from 'react-scroll'
import { TagFilters } from '../../utils/data.js'

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { setTag } = useProjects();

    return (
        <div id="Services" style={styles.container}>
            <Header title={text.sevices.title} />
            <div className="row">
                {
                    text.sevices.list.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <Link
                                onClick={() => setTag(TagFilters[index + 1])}
                                to='Projects'
                                offset={-110}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className={`d-flex flex-column align-items-center justify-content-center text-center p-3 gap-3 rounded-4 mb-3`}
                                style={{
                                    ...styles.card,
                                    ...(activeIndex === index ? styles.cardHover : {})
                                }}>
                                <FontAwesomeIcon icon={service.icon} size='2x' />
                                <h3 className='fs-6 fw-bold'>{service.title}</h3>
                                <div className='w-100'>
                                    <p className='text-justify'>{service.Description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div >
    )
}
