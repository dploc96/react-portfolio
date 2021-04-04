import React, { useEffect, useState } from 'react';
import './Header.scss';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const openNav = () => {
    document.body.classList.toggle('header__nav--open');
  };

  const openLink = () => {
    document.body.classList.remove('header__nav--open');
  };

  return (
    <header id="header">
      <div className="header__switch">
        <input
          type="checkbox"
          id="header-switch__check"
          className="header-switch__check"
          onClick={() => setTheme(nextTheme)}
        />
        <label htmlFor="header-switch__check">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="header-switch__ball"></div>
        </label>
      </div>
      <button className="header__menu-icon" onClick={openNav}>
        <span></span>
      </button>
      <nav className="header__nav">
        <ul className="header-nav__list">
          <li>
            <a href="#" onClick={openLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#skill" onClick={openLink}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={openLink}>
              Pet Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={openLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
