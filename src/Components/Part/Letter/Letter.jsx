import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function Letters() {
  const navigate = useNavigate();

  const navigateLetters = (letter) => {
    navigate(`/lettersSearch/${letter}`);
  };

  return (
    <div className="letters ">
      {letters.map((letter, index) => (
        <div key={index}>
          <h2 onClick={() => navigateLetters(letter)}>{letter} </h2><span>/</span>
        </div>
      ))}
    </div>
  );
}

export default Letters;
