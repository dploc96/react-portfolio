import React from 'react';
import './Home.scss';

export default function Intro() {
  return (
    <section id="home">
      <div className="home__content">
        <h1 className="title title--home">
          Hi, I am <strong>Duong Phuoc Loc</strong>
        </h1>
        <p className="subtitle subtitle--home">front-end dev</p>
      </div>
    </section>
  );
}
