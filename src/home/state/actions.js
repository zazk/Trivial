import types from "./types.js";

// Setup the actions
const requestQuestions = () => ({
  type: types.REQUEST_QUESTIONS,
  questions: []
});
const receiveQuestions = (items, game) => ({
  type: types.RECEIVE_QUESTIONS,
  questions: items,
  game: game
});
const setActiveQuestion = item => ({
  type: types.SET_ACTIVE_QUESTION,
  active: item
});

const playAgain = () => ({
  type: types.PLAY_AGAIN
});

const startGame = () => ({
  type: types.START_GAME
});

const showAnswer = (item, answer) => ({
  type: types.SHOW_ANSWER,
  active: item,
  answer: answer
});

const setCategory = category => ({
  type: types.SET_CATEGORY,
  category: category
});

export default {
  requestQuestions,
  receiveQuestions,
  setActiveQuestion,
  startGame,
  showAnswer,
  playAgain,
  setCategory
};
