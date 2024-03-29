import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faFile, faLaptopCode, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sidebarRef = useRef(); // Create a reference

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // add empty array as second argument to run only on component mount and unmount

  return (
    <nav className="navigation-container">
      <div
         className=""
         >
        <button
          className={`navigation-button hide-on-desktop ${showMenu? "" :""}`}
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
          ref={sidebarRef} // add the reference here
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
            </span>
          </span>
        </div>
      </div>
    </nav>
   )
};

export default Navigation;
