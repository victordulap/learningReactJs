import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(links);
  const [navSocials, setNavSocials] = useState(social);
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const linksRef = useRef(null);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={require('./logo.svg')} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => {
              setIsDroppedDown(!isDroppedDown);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          style={{
            height: isDroppedDown
              ? linksRef.current.getBoundingClientRect().height + 'px'
              : '0px',
          }}
        >
          <ul className="links" ref={linksRef}>
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <a href={navLink.url}>{navLink.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {navSocials.map((navSocial) => {
            return (
              <li id={navSocial.id}>
                <a href={navSocial.url}>{navSocial.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
