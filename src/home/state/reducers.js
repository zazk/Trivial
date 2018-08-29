import types from './types';
// Setup initial state.
const INITIAL_STATE = {
  loading: false,
  questions: []
};
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Manage loading state.
    case types.REQUEST_QUESTIONS: {
      return {
        ...state,
        questions: [],
        loading: true
      };
    }
    // Manage results and reset loading state.
    case types.RECEIVE_QUESTIONS: {
      const { questions } = action;
      return {
        ...state,
        questions: questions,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
