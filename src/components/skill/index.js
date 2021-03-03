import React from 'react';
import './Skill.scss';
import myCV from '../../myCV.pdf';

export default function SKill() {
  return (
    <section id="skill">
      <h2 className="title title--skill">Skills</h2>
      <div className="skill__list">
        <div className="skill__item">
          <h3>PROGRAMMING LANGUAGES</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Visual Basic</li>
          </ul>
        </div>
        <div className="skill__item">
          <h3>FRAMEWORKS</h3>
          <ul>
            <li>ReactJS</li>
          </ul>
          <h3>VERSION CONTROL</h3>
          <ul>
            <li>Git</li>
            <li>SVN</li>
          </ul>
        </div>
        <div className="skill__item">
          <h3>DATABASE</h3>
          <ul>
            <li>Microsoft SQL Server</li>
          </ul>
          <h3>IDE</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Visual Studio 2012</li>
          </ul>
        </div>
      </div>
      <a target="_blank" href="{myCV}" className="btn">
        Download CV
      </a>
    </section>
  );
}
