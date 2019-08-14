import React, { useEffect } from "react";
import PropTypes from "prop-types";
import GameContainer from "./GameContainer";
import Landing from "./Landing";

// Just setup de wrapper to the Game Container.
const HomeComponent = ({ fetchQuestions, startGame, start }) => {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  const handleCategory = cat => {
    fetchQuestions(cat);
  };
  return (
    <>
      <Landing
        start={start}
        visible={!start}
        onClick={() => startGame()}
        handleCategory={handleCategory}
      />
      <GameContainer visible={start} />
    </>
  );
};

HomeComponent.propTypes = {
  startGame: PropTypes.func.isRequired,
  start: PropTypes.bool,
  fetchQuestions: PropTypes.func
};

export default HomeComponent;
