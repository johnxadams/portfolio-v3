//hooks
import { useState } from 'react';

//librabries
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

//styled-components
import { ContactMeNav } from '../../StyledComponents/Button';

export default function NavBar() {
  //useStates 5x
  const [opacityState, setOpacityState] = useState(false);
  const [homeState, setHomeState] = useState(false);
  const [AboutMeState, setAboutMeState] = useState(false);
  const [projectsState, setProjectsState] = useState(false);
  const [toolsState, setToolsState] = useState(false);

  // eventListener 2x
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

    scrollValue < 600 ? setHomeState(true) : setHomeState(false);

    scrollValue > 600 && scrollValue < 1000
      ? setAboutMeState(true)
      : setAboutMeState(false);
    scrollValue > 1000 && scrollValue < 3500
      ? setProjectsState(true)
      : setProjectsState(false);

    scrollValue > 3500 ? setToolsState(true) : setToolsState(false);
  };

  window.addEventListener('scroll', changeNavBarOpacityOnScroll);
  window.addEventListener('scroll', moveToNextNavigationOnScroll);

  return (
    <>
      <nav className={opacityState ? 'navbar-opacity' : null}>
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
              offset={-80}
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
      </nav>
    </>
  );
}
