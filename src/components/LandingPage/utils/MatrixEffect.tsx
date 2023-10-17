import React, { useEffect, useState } from 'react';
import './MatrixEffect.scss'; // Create a CSS file for styling

const MatrixEffect: React.FC = () => {
  const [matrixText, setMatrixText] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRow = generateMatrixRow();
      setMatrixText((prevMatrix) => [newRow, ...prevMatrix].slice(0, 20));
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generateMatrixRow = () => {
    const row = [];
    for (let i = 0; i < 50; i++) {
      const randomValue = Math.random() > 0.8 ? '1' : '0';
      row.push(randomValue);
    }
    return row.join('');
  };

  return (
    <div className="matrix-container">
      {matrixText.map((row, index) => (
        <div key={index} className="matrix-row">
          {row.split('').map((char, charIndex) => (
            <span key={charIndex} className={char === '1' ? 'one' : 'zero'}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixEffect;
