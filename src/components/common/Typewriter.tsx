import React, { useState, useEffect } from 'react';
import './Typewriter.scss'; // Import the SCSS file

interface TextPrinterProps {
  textList: string[];
}

const Typewriter = ({ textList }: TextPrinterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [outputText, setOutputText] = useState<string[]>(['']);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < textList.length) {
        const currentText = textList[currentTextIndex];
        if (currentCharIndex <= currentText.length) {
          const newText = currentText.substring(0, currentCharIndex);
          setOutputText((prevOutputText) => [...prevOutputText.slice(0, -1), newText]);
          setCurrentCharIndex(currentCharIndex + 1);
        } else if (currentTextIndex < textList.length - 1) {
          // Move to the next string in the list and reset char index
          setOutputText((prevOutputText) => [...prevOutputText, '']);
          setCurrentCharIndex(0);
          setCurrentTextIndex(currentTextIndex + 1);
        }
      }
    }, 75); //Typing speed (in milliseconds)

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, textList]);

  return (
    <div className="typing-block">
      {outputText.map((text, index) => (
        <p key={index} className="typing-block--text">
          {index === outputText.length - 1 ? (
            <>
              {text.substring(0, text.length)}
              <span className="blinking-underscore">{'_'}</span>
            </>
          ) : (
            <>{text}</>
          )}
        </p>
      ))}
    </div>
  );
};

export default Typewriter;
