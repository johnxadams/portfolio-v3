import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={500} className="nav-link" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500} className="nav-link" 
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500} className="nav-link"
            >
              My Project
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="tools"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} className="nav-link"
            >
              Tools
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
