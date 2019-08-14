import React, { useEffect } from "react";
import GameContainer from "./GameContainer";
import Landing from "./Landing";

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
