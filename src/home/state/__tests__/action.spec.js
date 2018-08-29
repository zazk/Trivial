import actions from '../actions';
import types from '../types';
describe('actions', () => {
  it('should create an action to receive questions', () => {
    const expectedAction = {
      type: types.RECEIVE_QUESTIONS,
      questions: []
    };
    expect(actions.receiveQuestions([])).toEqual(expectedAction);
  });

  it('should create an action to request questions', () => {
    const expectedAction = {
      type: types.REQUEST_QUESTIONS,
      questions: []
    };
    expect(actions.requestQuestions()).toEqual(expectedAction);
  });
});
