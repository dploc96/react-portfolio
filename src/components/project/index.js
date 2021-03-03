import React from 'react';
import './Project.scss';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <section id="project">
      <h2 className="title title--project">Pet projects</h2>
      <div className="project__list">
        <a href="/birthday-reminder" className="project__item">
          <img src="images/portfolio.jpg" alt="" />
        </a>

        <a
          href="https://frozen-crag-64962.herokuapp.com/"
          className="project__item"
        >
          <img src="images/portfolio.jpg" alt="" />
        </a>

        <a href="/flappy-bird" className="project__item">
          <img src="images/portfolio.jpg" alt="" />
        </a>

        <a href="portfolio-item.html" className="project__item">
          <img src="images/portfolio.jpg" alt="" />
        </a>
      </div>
    </section>
  );
}
