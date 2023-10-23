import React from "react";

function ResultBanner({ gameResult, answer, guessNumber }) {

  return (
    <>
      {gameResult === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guessNumber} guesses</strong>.
          </p>
        </div>
      )} 
      {gameResult === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default ResultBanner;
