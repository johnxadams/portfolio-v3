import React, { useState } from "react";
import styled from "styled-components";

//librabries
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

//styled-components
import { ContactMeNav } from "../../StyledComponents/Button";


export default function NavBar() {
  const [stateOpacity, setStateOpacity] = useState(false);
  const [stateHome, setStateHome] = useState(false);
  const [stateAboutMe, setStateAboutMe] = useState(false);
  const [stateProjects, setStateProjects] = useState(false);
  const [stateTools, setStateTools] = useState(false);

  const changeNavBarOpacityOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 600) {
      setStateOpacity(true);
    } else {
      setStateOpacity(false);
    }
  };

  const changeNavigationOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    // if(scrollValue < 600) {
    //   setStateHome(true)
    // } else { setStateHome(false)}
    scrollValue < 600 ? setStateHome(true) : setStateHome(false);

    scrollValue > 600 && scrollValue < 1000
      ? setStateAboutMe(true)
      : setStateAboutMe(false);
    scrollValue > 1000 && scrollValue < 3500
      ? setStateProjects(true)
      : setStateProjects(false);

    scrollValue > 3500 ? setStateTools(true) : setStateTools(false);
  };
  window.addEventListener("scroll", changeNavBarOpacityOnScroll);
  window.addEventListener("scroll", changeNavigationOnScroll);

  return (
    <>
      <nav className={stateOpacity ? "navPacity" : null}>
        <ul>
          <li className={stateHome ? "nav-item" : null}>
            <LinkScroll
              to="/"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className={stateHome ? "nav-link" : null}
            >
              Home
            </LinkScroll>
          </li>
          <li className={stateAboutMe ? "nav-item" : null}>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
              className={stateAboutMe ? "nav-link" : null}
            >
              About Me
            </LinkScroll>
          </li>
          <li className={stateProjects ? "nav-item" : null}>
            <LinkScroll
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={100}
              className={stateProjects ? "nav-link" : null}
            >
              My Project
            </LinkScroll>
          </li>
          <li className={stateTools ? "nav-item" : null}>
            <LinkScroll
              to="tools"
              spy={true}
              smooth={true}
              offset={-60}
              duration={100}
              className={stateTools ? "nav-link" : null}
            >
              Tools
            </LinkScroll>
          </li>
        </ul>
        <LinkRouter to={"/contact"}>
          {/* <div className="navbar-contact-me">Contact Me</div> */}
          <ContactMeNav>Contact Me</ContactMeNav>
        </LinkRouter>
        
      </nav>
    </>
  );
}

const setupBorder = ({width, type, color}) => {
  return `${width}px ${type} ${color}`
}


