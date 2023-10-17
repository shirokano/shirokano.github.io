import React, { useState } from 'react';
import './ComputerMonitor.scss'; // Import the CSS file

const ComputerMonitor: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const displayText = isOn ? (
    <>
      {'Error:'}
      <br />
      {'system in repair'}
    </>
  ) : (
    ''
  );

  return (
    <div className={`computer-monitor ${isOn ? 'on' : 'off'}`}>
      <div className="screen">
        {isOn ? (
          <pre>{displayText}</pre>
        ) : (
          <div className="screen-off">{/* <p>Monitor is off</p> */}</div>
        )}
      </div>
      <div className="button-container">
        <button className="monitor-button" onClick={() => setIsOn(true)}>
          {'['}
          <span className="botton-text">ON</span>
          {']'}
        </button>
        <button className="monitor-button" onClick={() => setIsOn(false)}>
          {'['}
          <span className="botton-text">OFF</span>
          {']'}
        </button>
      </div>
    </div>
  );
};

export default ComputerMonitor;
