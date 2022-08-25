import React from "react";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Link to={"/contact"}>
        <div className="contact-me-button">Contact me</div>
      </Link>

      <div className="social-network-container">
        <div>
          <FaLinkedinIn className="social-network-icon" />
        </div>
        <div>
          <IoLogoGithub className="social-network-icon" />
        </div>
        <div>
          <FaInstagram className="social-network-icon" />
        </div>
      </div>
      <p>still in process by John Adams</p>
    </>
  );
}
