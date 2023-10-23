import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "../UserInput";
import GuessResults from "../GuessResults";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesState, setGuessState] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('running');

  function guessHandler(userGuess) {
    const nextGuesses = [
      ...guessesState,
      { id: Math.random(), value: userGuess },
    ];
    setGuessState(nextGuesses);

    if (userGuess === answer) {
      setGameResult('won');
    } else if (nextGuesses.length >= 6) {
      setGameResult('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guessesState} answer={answer} />
      <ResultBanner gameResult={gameResult} answer={answer} guessNumber={guessesState.length} />
      <UserInput getGuess={guessHandler} gameResult={gameResult} />
    </>
  );
}

export default Game;
