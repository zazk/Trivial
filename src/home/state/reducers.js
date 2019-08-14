import types from "./types";
// Setup initial state.
const INITIAL_STATE = {
  loading: true,
  questions: [],
  active: null,
  game: null,
  start: false,
  end: false,
  category: "",
  showAnswer: false
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
      const next = state.game.questions[action.active.index + 1];
      if (!next) {
        state.end = true;
      }
      return {
        ...state,
        showAnswer: false,
        active: next ? next : state.active
      };
    }
    case types.END_GAME: {
      return {
        ...state,
        end: true
      };
    }
    case types.START_GAME: {
      return {
        ...state,
        start: true
      };
    }
    case types.SHOW_ANSWER: {
      const index = action.active.index;
      const right = action.answer === action.active.right;
      state.game.questions[index].answer = action.answer;
      state.game.questions[index].right = right;
      state.game.right = right ? state.game.right + 1 : state.game.right;
      return {
        ...state,
        showAnswer: true
      };
    }
    case types.PLAY_AGAIN: {
      return {
        ...state,
        start: false,
        end: false
      };
    }
    case types.SET_CATEGORY: {
      return {
        ...state,
        category: action.category
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
