import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:dploc96@gmail.com" className="footer__link">
        dploc96@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="tel:0842575139">
            <i className="fas fa-phone"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/locphuocduong"
            target="blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="skype:live:dploc96?chat">
            <i className="fab fa-skype"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/dploc96"
            target="blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
