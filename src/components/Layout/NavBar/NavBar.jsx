//hooks
import { useState, useContext } from 'react';

//librabries
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

//styled-components
import { ContactMeNav } from '../../StyledComponents/Button';
import { MyContext } from '../../Context/MyContexts';

export default function NavBar() {
  const {hamburger} = useContext(MyContext)

  //useStates 5x
  const [opacityState, setOpacityState] = useState(false);
  const [homeState, setHomeState] = useState(false);
  const [AboutMeState, setAboutMeState] = useState(false);
  const [projectsState, setProjectsState] = useState(false);
  const [toolsState, setToolsState] = useState(false);
  // const [hamburgerMenu, setHamburgerMenu] = useState(false);

  // // eventListener 2x

  // const handleHamburgerMenu = (e) => {
  //   setHamburgerMenu(!hamburgerMenu);
  // };

  const changeNavBarOpacityOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    if (scrollValue > 600) {
      setOpacityState(true);
    } else {
      setOpacityState(false);
    }
  };

  const moveToNextNavigationOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    scrollValue < 450 ? setHomeState(true) : setHomeState(false);

    scrollValue > 450 && scrollValue < 1000
      ? setAboutMeState(true)
      : setAboutMeState(false);
    scrollValue > 1000 && scrollValue < 3900
      ? setProjectsState(true)
      : setProjectsState(false);

    scrollValue > 3900 ? setToolsState(true) : setToolsState(false);
  };

  window.addEventListener('scroll', changeNavBarOpacityOnScroll);
  window.addEventListener('scroll', moveToNextNavigationOnScroll);

  return (
    <>
      <nav className={`${opacityState ? 'navbar-opacity' : null} ${hamburger ? 'hideNavBar' : null}`}>
        <ul>
          <li className={homeState ? 'nav-item' : null}>
            <ScrollLink
              to="/"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className={homeState ? 'nav-link' : null}
            >
              Home
            </ScrollLink>
          </li>
          <li className={AboutMeState ? 'nav-item' : null}>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-220}
              duration={100}
              className={AboutMeState ? 'nav-link' : null}
            >
              About Me
            </ScrollLink>
          </li>
          <li className={projectsState ? 'nav-item' : null}>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={100}
              className={projectsState ? 'nav-link' : null}
            >
              My Project
            </ScrollLink>
          </li>
          <li className={toolsState ? 'nav-item' : null}>
            <ScrollLink
              to="tools"
              spy={true}
              smooth={true}
              offset={-60}
              duration={100}
              className={toolsState ? 'nav-link' : null}
            >
              Tools
            </ScrollLink>
          </li>
        </ul>

        <RouterLink to={'/contact'}>
          <ContactMeNav>Contact Me</ContactMeNav>
        </RouterLink>

        {/* <button
          className={`hamburger ${hamburgerMenu ? 'is-active' : null}`}
          onClick={handleHamburgerMenu}
        >
          <div className="hamburger-bar"></div>
        </button> */}
        {/* <nav className={`mobile-nav ${hamburgerMenu ? 'is-active' : null}`}>
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">My Project</a>
          <a href="#">Tools</a>
          <a href="#">Contact Me</a>
        </nav> */}
      </nav>
      
    </>
  );
}
