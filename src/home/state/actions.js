import types from './types.js';

// Setup the actions
const requestQuestions = term => ({
  type: types.REQUEST_QUESTIONS,
  questions: []
});
const receiveQuestions = items => ({
  type: types.RECEIVE_QUESTIONS,
  questions: items
});

export default { requestQuestions, receiveQuestions };
