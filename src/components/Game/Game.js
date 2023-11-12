import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "../UserInput";
import GuessResults from "../GuessResults";
import ResultBanner from "../ResultBanner";
import ScreenKeyboard from "../ScreenKeyboard/ScreenKeyboard";
import { checkGuess } from "../../game-helpers";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessesState, setGuessState] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("running");

  React.useEffect(() => {
    console.info({ answer });
  }, [answer]);

  function guessHandler(userGuess) {
    const nextGuesses = [
      ...guessesState,
      { id: Math.random(), value: userGuess },
    ];
    setGuessState(nextGuesses);

    if (userGuess === answer) {
      setGameResult("won");
    } else if (nextGuesses.length >= 6) {
      setGameResult("lost");
    }
  }

  function handleResetGame() {
    setGameResult("running");
    setGuessState([]);
    setAnswer(sample(WORDS));
  }

  const correctGuesses = guessesState.map((guess) => {
    return checkGuess(guess.value, answer);
  });

  return (
    <>
      <GuessResults guesses={guessesState} answer={answer} />
      <ResultBanner
        gameResult={gameResult}
        answer={answer}
        guessNumber={guessesState.length}
        handleResetGame={handleResetGame}
      />
      <ScreenKeyboard correctGuesses={correctGuesses} />
      <UserInput getGuess={guessHandler} gameResult={gameResult} />
    </>
  );
}

export default Game;
