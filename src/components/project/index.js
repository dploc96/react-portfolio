import React from 'react';
import './Project.scss';

export default function Project() {
  return (
    <section id="project">
      <h2 className="title title--project">Pet projects</h2>
      <div className="project__list">
        <div className="project__item">
          <a href="https://dploc96.github.io/vanilla-js-band.github.io/">
            <img src="images/theBand.png" alt="" />
          </a>
          <h4>The Band</h4>
        </div>
        <div className="project__item">
          <a href="https://frozen-crag-64962.herokuapp.com/">
            <img src="images/amazonClone.png" alt="" />
          </a>
          <h4>Amazon Simple Clone</h4>
        </div>
        {/* <div className="project__item">
          <a href="/flappy-bird">
            <img src="images/portfolio.jpg" alt="" />
          </a>
        </div>
        <div className="project__item">
          <a href="portfolio-item.html">
            <img src="images/portfolio.jpg" alt="" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
