import React from 'react'
import Header from '@/app/components/header/header.jsx'
import { text } from '../../utils/data.js'
import { styles } from './servicesStyles.js'

export default function Services() {
    return (
        <div style={styles.container}>
            <Header title={text.sevices.title} />
            <div className="row">
                {
                    text.sevices.list.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="service-item">
                                <i className={`fa ${service.icon} fa-2x`}></i>
                                <h3>{service.title}</h3>
                                <p>{service.Description}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
