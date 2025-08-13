"use client"
import { styles } from "./formStyles"
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from 'emailjs-com'
import { text } from "@/app/utils/data"

export default function ContactForm() {
    const [btnHover, setBtnHover] = useState(false);
    const [emailRes, setEmailRes] = useState({ status: null, message: null });
    const myEmail = text.contact.details[2].value
    const emailRegx = /\S+@\S+\.\S+/;

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!emailRegx.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.subject) {
            errors.subject = 'Required';
        }
        if (!values.message) {
            errors.message = 'Required';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validate={validate}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                emailjs.send(
                    'service_xsbiol9',
                    'template_nrqfau7',
                    {
                        from_name: values.name,
                        from_email: values.email,
                        subject: values.subject,
                        message: values.message,
                        to_email: myEmail
                    },
                    'wlpZWkMWO1QzlFRnJ'
                ).then(() => {
                    setEmailRes({ status: 200, message: 'Email sent successfully!' });
                    resetForm();
                    setSubmitting(false);
                }).catch(() => {
                    setEmailRes({ status: 400, message: 'Failed to send email.' });
                    setSubmitting(false);
                });
            }}
        >
            {({ isSubmitting }) => (
                <Form className="container p-0">
                    <div className="row m-0" style={styles.conatiner}>
                        <div className="col-6 mb-3">
                            <Field type="text" name="name" style={styles.input} placeholder="Name" />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="col-6 mb-3">
                            <Field type="text" name="email" style={styles.input} placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="col-12 mb-3">
                            <Field type="text" name="subject" style={styles.input} placeholder="Subject" />
                            <ErrorMessage name="subject" component="div" className="text-danger" />
                        </div>
                        <div className="col-12 mb-3">
                            <Field as="textarea" rows={4} name="message" style={styles.input} placeholder="Message" />
                            <ErrorMessage name="message" component="div" className="text-danger" />
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{ ...styles.button, ...(btnHover && styles.buttonHover) }}
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>
                        </div>
                        <div className="col-12">
                            {emailRes.status !== null &&
                                (
                                    <div className={`pt-3 ${emailRes.status === 200 ? "text-success" : "text-danger"}`}>{emailRes.message}</div>
                                )
                            }
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
