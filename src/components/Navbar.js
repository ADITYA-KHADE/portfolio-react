import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/navbar.css';
// import { HashLink } from "react-router-hash-link";
import {Link} from "react-router-dom"
//sorry
function Navbar() {
  const [scrollingDown, setScrollingDown] = useState(true);
  const [visible, setVisible] = useState(true);

  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setScrollingDown(isScrollingDown);
      prevScrollPos = currentScrollPos;

      // Show/hide the header based on scroll direction
      setVisible(!isScrollingDown);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollingDown ? 'scrolling-down' : 'scrolling-up'} ${visible ? 'visible' : 'hidden'}`}>
        <div className="div-left">
            <ul>
                <li><Link to="https://gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Link></li>
                <li><Link to="https://github.com"><FontAwesomeIcon icon={faGithub} /></Link></li>
                <li><Link to="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                <li><Link to="https://medium.com"><FontAwesomeIcon icon={faMedium} /></Link></li>
                <li><Link to="https://stackoverflow.com"><FontAwesomeIcon icon={faStackOverflow} /></Link></li>
            </ul>
        </div>
        <div className="div-right">
            <ul>
                <li><a href="#projects" onClick={handleClick("projects")}>Projects</a></li>
                <li><a href="#contacts" onClick={handleClick("contacts")}>Contact Me</a></li>
                {/* <li><HashLink to="#Projects" smooth>Projects</HashLink></li>
                <li><HashLink to="#Contacts" smooth>Contact Me</HashLink></li> */}
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;