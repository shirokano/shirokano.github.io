import React, { useEffect, useRef, useState } from 'react';
import './Projects.scss';
import Card from '../utils/Card';

function Projects() {
  return (
    <>
      <div className="achievements--card--section-title">PROJECTS</div>
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default Projects;
