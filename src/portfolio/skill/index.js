import React from 'react';
import './Skill.scss';
import myCV from '../../myCV.pdf';

export default function SKill() {
  return (
    <section className="skill" id="skill">
      <h2 className="section__title skill__title">Skills</h2>
      <div className="skill__list">
        <div className="skill__item">
          <h5>PROGRAMMING LANGUAGES</h5>
          <ul>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Visual Basic</li>
          </ul>
        </div>
        <div className="skill__item">
          <h5>FRAMEWORKS</h5>
          <ul>
            <li>ReactJS</li>
          </ul>
          <h5>VERSION CONTROL</h5>
          <ul>
            <li>Git</li>
            <li>SVN</li>
          </ul>
        </div>
        <div className="skill__item">
          <h5>DATABASE</h5>
          <ul>
            <li>Microsoft SQL Server</li>
          </ul>
          <h5>IDE</h5>
          <ul>
            <li>Visual Studio Code</li>
            <li>Visual Studio 2012</li>
          </ul>
        </div>
      </div>
      <a target="_blank" href={myCV}>
        <button className="btn">Download CV</button>
      </a>
    </section>
  );
}
