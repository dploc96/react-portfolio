import React from 'react';
import './Project.scss';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <section className="project" id="project">
      <h2 className="section__title project__title">Pet projects</h2>
      <div className="project__list">
        <Link to="/birthday-reminder" className="project__item">
          <img
            src="images/birthdayReminder.png"
            alt=""
            className="project__img"
          />
        </Link>

        <a href="portfolio-item.html" className="project__item">
          <img src="images/portfolio-02.jpg" alt="" className="project__img" />
        </a>

        <a href="portfolio-item.html" className="project__item">
          <img src="images/portfolio-03.jpg" alt="" className="project__img" />
        </a>

        <a href="portfolio-item.html" className="project__item">
          <img src="images/portfolio-04.jpg" alt="" className="project__img" />
        </a>
      </div>
    </section>
  );
}
