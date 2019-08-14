import React, { useEffect } from "react";
import GameContainer from "./GameContainer";

const Landing = ({ start, visible, onClick }) => (
  <div className={"landing " + (visible ? "show" : "hide")}>
    <h4>Welcome to the Challenge</h4>
    <div className="landing-content">
      <div>
        You will be presented with
        <strong> True </strong>
        or
        <strong> False </strong>
        questions.
      </div>
      <div>Can you score 100%?</div>
    </div>
    <div className="actions">
      <button disabled={start} onClick={onClick}>
        BEGIN
      </button>
    </div>
  </div>
);

// Just setup de wrapper to the Game Container.
const HomeComponent = ({ fetchQuestions, startGame, start }) => {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  return (
    <>
      <Landing start={start} visible={!start} onClick={() => startGame()} />
      <GameContainer visible={start} />
    </>
  );
};

export default HomeComponent;
