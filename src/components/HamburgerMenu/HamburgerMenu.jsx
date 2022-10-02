import React, { useState, useContext } from 'react';
import { activateHamburgerMenu } from '../../utils/globalUtils';
import { MyContext } from '../Context/MyContexts';

export default function HamburgerMenu() {
  //   const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const { hamburger, setHamburger } = useContext(MyContext);

  const handleHamburgerMenu = (e) => {
    activateHamburgerMenu(hamburger, setHamburger);
  };

  return (
    <div>
      <button
        className={`hamburger ${hamburger ? 'is-active' : null}`}
        onClick={handleHamburgerMenu}
      >
        <div className="hamburger-bar"></div>
      </button>
      <div className={`mobile-nav ${hamburger ? 'is-active' : null}`}>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">My Project</a>
          <a href="#">Tools</a>
          <a href="#">Contact Me</a>
        </nav>
      </div>
    </div>
  );
}
