import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faHouse, faFile, faBlog, faLaptopCode, faWindowClose } from '@fortawesome/free-solid-svg-icons'



const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu")
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    console.log("closeMenu")
    setShowMenu(false);
  };

  return (
    <header className="">
      <span
         className=""
         >
        <button
          className={` hide-on-desktop ${showMenu? "" :""}`}
          type="button"

          aria-controls="sidebarMenu"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          >

          { !showMenu && <FontAwesomeIcon icon={faBars}/>}
          { showMenu && <FontAwesomeIcon icon={faHouse}/>}
        </button>

        <div
          id="sidebarMenu"
          className={`show-on-desktop collapse sidebar py-0 ${showMenu? "show" :"hide"}`}
          >
          <span className="m-0 p-0">

            <span className="list-group list-group-flush my-2 ">
              <button
                className="navbar-toggler hide-on-desktop border-0 align-self-end"
                type="button"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
                >
                { showMenu && <FontAwesomeIcon icon={faWindowClose} size="xl"/>}
              </button>
              <Link
                to="/"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
                onClick={closeMenu}
                >
                <FontAwesomeIcon icon={faHouse} /><span>Home</span>
              </Link>
              <Link
                to="/resume"
                className="list-group-item list-group-item-action py-2 ripple"
                onClick={closeMenu}
                >
                <FontAwesomeIcon icon={faFile} /><span>Resume</span>
              </Link>
              <Link
                to="/projects"
                className="list-group-item list-group-item-action py-2 ripple"
                onClick={closeMenu}
                >
                <FontAwesomeIcon icon={faLaptopCode} /><span>Projects</span></Link
                >
              <Link
                to="/blog"
                className="list-group-item list-group-item-action py-2 ripple"
                  onClick={closeMenu}
                >
                <FontAwesomeIcon icon={faBlog} /><span>Blog</span></Link
                >
              <Link
                to="/contact"
                className="list-group-item list-group-item-action py-2 ripple"
                onClick={closeMenu}
                >
                <FontAwesomeIcon icon={faEnvelope} /><span>Contact</span>
              </Link>
            </span>
          </span>
        </div>
      </span>
    </header>
   )
};

export default Navigation;
