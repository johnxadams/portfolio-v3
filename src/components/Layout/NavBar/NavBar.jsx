import React, { useState } from "react";
import { Link } from "react-scroll";

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

    scrollValue > 600 && scrollValue < 1300
      ? setStateAboutMe(true)
      : setStateAboutMe(false);
    scrollValue > 1300 && scrollValue < 4300
      ? setStateProjects(true)
      : setStateProjects(false);

    scrollValue > 4300
      ? setStateTools(true)
      : setStateTools(false);
  };
  window.addEventListener("scroll", changeNavBarOpacityOnScroll);
  window.addEventListener("scroll", changeNavigationOnScroll);

  return (
    <>
      <nav className={stateOpacity ? "navPacity" : null}>
        <ul>
          <li className={stateHome ? "nav-item" : null}>

            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={stateHome ? "nav-link" : null}
            >
              Home
            </Link>
          </li>
          <li className={stateAboutMe ? "nav-item" : null}>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              className={stateAboutMe ? "nav-link" : null}
            >
              About Me
            </Link>
          </li>
          <li className={stateProjects ? "nav-item" : null}>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              className={stateProjects ? "nav-link" : null}
            >
              My Project
            </Link>
          </li>
          <li className={stateTools ? "nav-item" : null}>
            <Link
              to="tools"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={stateTools ? "nav-link" : null}
            >
              Tools
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
