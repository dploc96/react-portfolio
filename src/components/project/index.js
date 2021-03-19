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
          <h4>The Band Clone</h4>
        </div>
        <div className="project__item">
          <a href="https://frozen-crag-64962.herokuapp.com/">
            <img src="images/amazonClone.png" alt="" />
          </a>
          <h4>Amazon Simple Clone</h4>
        </div>
        <div className="project__item">
          <a href="https://dploc96.github.io/product-page.github.io/">
            <img src="images/productPage.png" alt="" />
            <h4>Shoe Product Page</h4>
          </a>
        </div>
        <div className="project__item">
          <a href="https://dploc96.github.io/tribute-page.github.io/">
            <img src="images/tributePage.png" alt="" />
            <h4>Tribute Page</h4>
          </a>
        </div>
      </div>
    </section>
  );
}
