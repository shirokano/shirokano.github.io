import React from 'react';
import './Projects.scss';
import Card from '../utils/Card';
import { achievements } from '../../texts/projects';

function Projects() {
  return (
    <>
      <div className="achievements--card--section-title">PROJECTS</div>
      {achievements.projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </>
  );
}

export default Projects;
