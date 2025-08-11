import Header from '@/app/components/header/header'
import { text } from '@/app/utils/data'
import { styles } from './contactStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '@/app/components/form/form'

export default function Contact() {
    return (
        <div id="Contact" style={styles.container}>
            <Header title={text.contact.title} />
            <div className="container">
                <div className='row'>
                    <div className='col-lg-5'>
                        {text.contact.details.map((detail, index) => (
                            <div key={index} className='row mb-2'>
                                <div className='col-lg-2'>
                                    <FontAwesomeIcon icon={detail.icon} />
                                </div>
                                <div className='col-lg-10'>
                                    <h5 className='fs-6 '>{detail.title}</h5>
                                    <p className='fw-lighter'>{detail.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-7'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
