import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact-us.css';

export const ContactUs = () => {
  const form = useRef();
  const [successfulSending, setSuccessfulSending] = useState(false);
  const [wrongSending, setWrongSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_auq8jq2', 'template_kczsqvt', form.current, 'B11NSTtibUKKBAkNv')
        .then((result) => {
            setSuccessfulSending(true);
            setWrongSending(false);
        }, (error) => {
            setWrongSending(true);
        });
  };

  return (
    <React.Fragment>
        { !successfulSending && (
            <div className='contact' id='contact-us'>
                <div className='container'>
                    {wrongSending && (
                        <div class='flex-row d-flex justify-content-center'>
                            <p class="text-danger px-3 py-3">Algo salió mal, por favor intentalo más tarde.</p>
                        </div>
                    )}
                    <div class='flex-row d-flex justify-content-center'>
                        <h2 className='px-5 py-5 title-contact'>Contact Us</h2>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className='row px-4 py-4'>
                        <label className='contact-tittle'>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className='row px-4 py-4'>
                        <label className='contact-tittle'>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className='row px-4 py-4'>
                        <label className='contact-tittle'>Message</label>
                        <textarea name="message" />
                    </div>

                    <div className='row px-4 py-4'>
                        <input type="submit" className='btn btn-success' value="Send" />
                    </div>

                    </form>
                </div>
            </div>
        )}
        { successfulSending && (
            <div className='contact'>
                <div className='container'>
                    <div class='flex-row d-flex justify-content-center'>
                        <h3 className='px-5 py-5 success-message'>¡Mensaje enviado correctamente!</h3>
                    </div>
                </div>
            </div>
        )}
    </React.Fragment>
  );
};
