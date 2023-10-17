import React from 'react';
import './Certs.scss';
import Card from '../utils/Card';
import { achievements } from '../../texts/achievements';

function Certs() {
  return (
    <>
      <div className="achievements--card--section-title">CERTS</div>
      {achievements.certs.map((cert, index) => (
        <Card key={index} title={cert.title} description={cert.description} link={cert.link} />
      ))}
    </>
  );
}

export default Certs;
