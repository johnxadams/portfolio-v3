// hooks
import { useRef } from "react";

//libraries
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// reactIcons
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

// styled-component
import { HomeBtn } from "../../StyledComponents/Button";
import { SubmitBtn } from "../../StyledComponents/Button";

//email IDs
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function Contactpage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section className="contact-main">
        {/* div.cont */}
        <div className="contact-main-left">
          <div className="contact-left-head">
            {" "}
            <Link to="/">
              <HomeBtn>go back</HomeBtn>
              {/* <div className="go-back">go back</div> */}
            </Link>
          </div>
          {/* <img src={stayPresent} alt="" /> */}
        </div>
        <div className="contact-main-right">
          <div className="contact-right-head"></div>
          <div className="contact-right-main">
            <div className="text-me-message">Send me a message</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-me-user-name">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                />
              </div>
              <div className="contact-me-user-email">
                <input
                  type="text"
                  placeholder="email@gmail.com"
                  name="user_email"
                  required
                />
              </div>
              <div className="contact-me-subject">
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="contact-me-user-msg">
                <textarea
                  type="text"
                  placeholder="Your message"
                  name="message"
                  required
                />
              </div>
              <div className="contact-me-submit-space">
                <SubmitBtn type="submit">Send</SubmitBtn>
              </div>
            </form>
          </div>
          <div className="contact-right-bottom">
            <div className="contact-social-network-container">
              <div>
                <FaLinkedinIn className="contact-social-network-icon" />
              </div>
              <div>
                <IoLogoGithub className="contact-social-network-icon" />
              </div>
              <div>
                <FaInstagram className="contact-social-network-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
