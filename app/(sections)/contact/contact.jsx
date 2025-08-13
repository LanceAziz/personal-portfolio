"use client"
import Header from '@/app/components/header/header'
import { text } from '@/app/utils/data'
import { styles } from './contactStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '@/app/components/form/form'
import { faTrafficLight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { getCurrentBusyStatus } from '@/app/utils/helpers';
import { useState } from 'react'




export default function Contact() {
    const [status, setStatus] = useState(getCurrentBusyStatus());

    return (
        <div id="Contact" style={styles.container}>
            <Header title={text.contact.title} />
            <div className="container">
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className="row">
                            {text.contact.details.map((detail, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-12 mb-2">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <FontAwesomeIcon icon={detail.icon} />
                                        </div>
                                        <div className="col-lg-10">
                                            <h5 className="fs-6">{detail.title}</h5>
                                            <p className="fw-lighter">{detail.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-12 col-md-6 col-lg-12 mb-2">
                                <div className="row ">
                                    <div className="col-lg-2">
                                        <FontAwesomeIcon icon={status ? faTrafficLight : faCheck} className={`text-${status ? "danger" : "success"}`} />
                                    </div>
                                    <div className="col-lg-10">
                                        <h5 className="fs-6">Status</h5>
                                        <p className="fw-lighter">{status ? "Busy" : "Available"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 p-0'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
