import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const serviceID = 'service_nlooqos';
const templateID = 'template_qss9x3c';
const publicKey = 'uihv82IHWFWnCPMMm'

export default function Contactpage() {
    const form = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
    }
    
      return (
        <>
          <section className="contact-main">
            <div className="contact-main-left">
              <div className="contact-left-head"></div>
            </div>
            <div className="contact-main-right">
              <div className="contact-right-head"></div>
              <div className="contact-right-main">
                <div className="text-me-message">Send me a message</div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="contact-me-user-name">
                    <input type="text" placeholder="Name" name="user_name" />
                  </div>
                  <div className="contact-me-user-email">
                    <input type="text" placeholder="email@gmail.com" name="user_email" />
                  </div>
                  <div className="contact-me-subject">
                    <input type="text" placeholder="subject" name="subject"/>
                  </div>
                  <div className="contact-me-user-msg">
                    <textarea type="text" placeholder="Your message" name="message"/>
                  </div>
                  <div className="contact-me-submit-space">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
              <div className="contact-right-bottom"></div>
            </div>
          </section>
        </>
      );
    }
    