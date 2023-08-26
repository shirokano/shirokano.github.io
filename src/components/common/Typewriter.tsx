import React, { useEffect, useState } from 'react';
import './styles.scss';

interface typewriterProps {
  msg: string[];
}

function Typewriter({ msg }: typewriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < msg[currentStringIndex].length) {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % msg.length);
          setCurrentLetterIndex(0);
        }, 9000); // Pause before next string
      }
    }, 50);
    return () => clearInterval(interval);
  }, [currentStringIndex, currentLetterIndex]);

  const currentString = msg[currentStringIndex];
  const typedText = currentString.substring(0, currentLetterIndex);
  const lastCharacter = typedText.charAt(typedText.length - 1);
  const remainingText = typedText.slice(0, -1);

  return (
    <div data-testid="typing-block" className="typing-block">
      <div className="typewriter">
        {remainingText}
        <span className="fading-letter">{lastCharacter}</span>
        <span className="underscore">_</span>
      </div>
    </div>
  );
}

export default Typewriter;
