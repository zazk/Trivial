import types from './types';
// Setup initial state.
const INITIAL_STATE = {
  loading: true,
  questions: [],
  active: null,
  game: null,
  end: false
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
      const { questions, game } = action;
      return {
        ...state,
        questions: questions,
        active: game.questions[0],
        game: game,
        loading: false
      };
    }
    case types.SET_ACTIVE_QUESTION: {
      const active = state.game.questions[action.active.index + 1];
      if (active) {
        state.game.questions[action.active.index].answer = action.answer;
      } else {
        state.end = true;
      }
      return {
        ...state,
        active: active ? active : state.active
      };
    }
    case types.END_GAME: {
      return {
        ...state,
        end: true
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
