import React from "react";

const QWERTY = "qwertyuiopasdfghjklzxcvbnm";
const KEYBOARD = QWERTY.toUpperCase().split("");

function getLetterStatus(correctGuesses) {
  const statusObj = {};

  correctGuesses.forEach((correctGuess) => {
    correctGuess.forEach(({ letter, status }) => (statusObj[letter] = status));
  });

  return statusObj;
}

function ScreenKeyboard({ correctGuesses }) {
  let letterStatus = getLetterStatus(correctGuesses)

  console.log('LS: ', letterStatus)

  return (
    <div className="screen-keyboard-wrapper">
      <ul>
        {KEYBOARD.map((letter) => (
          <li className={letterStatus[letter]} key={letter}>{letter}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScreenKeyboard;
