import React from "react";
import Guess from "../Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  const dificulty = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {dificulty.map((el, index) => (
        <Guess key={index} guess={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
