import types from './types.js';

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
const setActiveQuestion = (item, answer) => ({
  type: types.SET_ACTIVE_QUESTION,
  active: item,
  answer: answer
});

const playAgain = () => ({
  type: types.PLAY_AGAIN
});

export default {
  requestQuestions,
  receiveQuestions,
  setActiveQuestion,
  playAgain
};
