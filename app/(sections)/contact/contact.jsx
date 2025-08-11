import Header from '@/app/components/header/header'
import { text } from '@/app/utils/data'

export default function Contact() {
    return (
        <div id="Contact">
            <Header title={text.contact.title} />
            <p>{text.contact.description}</p>
            <p>Email: {text.contact.email}</p>
            <p>Phone: {text.contact.phone}</p>
        </div>
    )
}
