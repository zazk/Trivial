import homeReducer from "../reducers";
import types from "../types";

describe("home reducer", () => {
  const INITIAL_STATE = {
    loading: true,
    questions: [],
    active: null,
    game: null,
    end: true,
    showAnswer: false,
    start: false
  };
  it("should return the initial state", () => {
    expect(homeReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle REQUEST_QUESTIONS", () => {
    expect(
      homeReducer([], {
        type: types.REQUEST_QUESTIONS
      })
    ).toEqual({
      loading: true,
      questions: []
    });
  });
});
