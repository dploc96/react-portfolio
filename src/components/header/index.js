import React from 'react';
import Theme from '../theme';
import './Header.scss';

export default function Header() {
  const openNav = () => {
    document.body.classList.toggle('nav-open');
  };

  const openLink = () => {
    document.body.classList.remove('nav-open');
  };

  return (
    <header id="header">
      <a className="logo" href="/">
        <img src="images/logo.png" alt="" />
      </a>
      <Theme />
      <button className="nav-toggle" onClick={openNav}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={openLink}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#skill" className="nav__link" onClick={openLink}>
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#project" className="nav__link" onClick={openLink}>
              Pet Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link" onClick={openLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
