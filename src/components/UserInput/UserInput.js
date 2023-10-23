import React from "react";

function UserInput({ getGuess, gameResult }) {
  const [userInput, setUserInput] = React.useState("");

  function inputHandler(event) {
    const nextUserInput = event.target.value.toUpperCase();
    setUserInput(nextUserInput);
  }

  function submitHandler(event) {
    event.preventDefault();
    getGuess(userInput);
    setUserInput("");
  }

  const isGameOver = gameResult === 'lost' || gameResult === 'won';

  return (
    <form onSubmit={submitHandler}>
      <div className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess: </label>
        <input
          type="text"
          id="guess-input"
          value={userInput}
          onChange={inputHandler}
          pattern="\w{5,5}"
          title="Word should contain 5 letters"
          disabled={isGameOver}
          />
      </div>
    </form>
  );
}

export default UserInput;
