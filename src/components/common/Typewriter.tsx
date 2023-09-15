import React, { useState, useEffect } from 'react';
import './Typewriter.scss'; // Import the SCSS file

interface TextPrinterProps {
  textList: string[];
}

const Typewriter = ({ textList }: TextPrinterProps) => {
  const [text, setText] = useState<string[]>(textList);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [outputText, setOutputText] = useState<string[]>(['']);
  // const [charsToDelete, setCharsToDelete] = useState<number>(0);
  // const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < text.length) {
        const currentText = text[currentTextIndex];
        if (currentCharIndex <= currentText.length) {
          const newText = currentText.substring(0, currentCharIndex);
          setOutputText((prevOutputText) => [...prevOutputText.slice(0, -1), newText]);
          setCurrentCharIndex(currentCharIndex + 1);
        } else if (currentTextIndex < text.length - 1) {
          // Move to the next string in the list and reset char index
          setOutputText((prevOutputText) => [...prevOutputText, '']);
          setCurrentCharIndex(0);
          setCurrentTextIndex(currentTextIndex + 1);
        }
      }
    }, 100); //Typing speed (in milliseconds)

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, text]);

  /**
   * @TODO WIP
   */
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate the scroll position as a percentage of the page scrolled
  //     const scrollY = window.scrollY || document.documentElement.scrollTop;
  //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  //     const scrollPercentage = (scrollY / maxScroll) * 100;
  //     setScrollPosition(scrollPercentage);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Calculate the number of characters to display based on scroll position
  //   const charsToDelete = Math.floor((scrollPosition / 100) * textList.join('').length);

  //   // Generate the updated text with characters to display
  //   // const newText = textList.map((text) => text.slice(0, charsToDisplay));
  //   setCharsToDelete(charsToDelete);
  // }, [scrollPosition, textList]);

  return (
    <div className="typing-block">
      {outputText.map((text, index) => (
        <p key={index} className="typewriter">
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
