import React from 'react';
import Contact from './contact';
import Intro from './intro';
import Project from './project';
import Skill from './skill';

export default function Portfolio() {
  return (
    <>
      <Intro />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
