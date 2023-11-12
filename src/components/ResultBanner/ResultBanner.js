import React from "react";

function ResultBanner({ gameResult, answer, guessNumber, handleResetGame }) {

  return (
    <>
      {gameResult === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guessNumber} guesses</strong>.
          </p>
          <button className="reset-button" onClick={handleResetGame}>Play Again</button>
        </div>
      )} 
      {gameResult === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="reset-button" onClick={handleResetGame}>Play Again</button>
        </div>
      )}
    </>
  );
}

export default ResultBanner;
