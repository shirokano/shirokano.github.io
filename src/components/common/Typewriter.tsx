import React, { useState, useEffect } from 'react';
import './Typewriter.scss'; // Import the SCSS file

interface TextPrinterProps {
  textList: string[];
}

const TextPrinter = ({ textList }: TextPrinterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [outputText, setOutputText] = useState<string[]>(['']); // Initialize with an empty string

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < textList.length) {
        const currentText = textList[currentTextIndex];
        if (currentCharIndex <= currentText.length) {
          const newText = currentText.substring(0, currentCharIndex);
          setOutputText((prevOutputText) => [
            ...prevOutputText.slice(0, -1),
            newText + (currentCharIndex < currentText.length ? '_' : '')
          ]);
          setCurrentCharIndex(currentCharIndex + 1);
        } else if (currentTextIndex < textList.length - 1) {
          // Move to the next string in the list and reset char index
          setOutputText((prevOutputText) => [...prevOutputText, '']);
          setCurrentCharIndex(0);
          setCurrentTextIndex(currentTextIndex + 1);
        } else if (currentCharIndex === textList[currentTextIndex].length + 1) {
          // Add the underscore to the end of the last printed text
          setOutputText((prevOutputText) => [
            ...prevOutputText.slice(0, -1),
            prevOutputText[prevOutputText.length - 1] + '_'
          ]);
        }
      }
    }, 100); // Adjust the speed at which characters are printed (in milliseconds)

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, textList]);

  return (
    <div className="typing-block">
      {outputText.map((text, index) => (
        <p key={index} className="typewriter">
          {index === outputText.length - 1 ? (
            <>
              {text.substring(0, text.length - 1)}
              <span className="blinking-underscore">{text.charAt(text.length - 1)}</span>
            </>
          ) : (
            text
          )}
        </p>
      ))}
    </div>
  );
};

export default TextPrinter;
