import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer }) {
  const lettersCount = range(5);

  return (
    <>
      <p className="guess">
        {lettersCount.map((number) => (
          <span key={number} className={guess ? "cell" + ' ' + checkGuess(guess.value, answer)[number].status : "cell"}>
            {guess ? guess.value[number] : undefined}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
