import actions from './actions';
import types from './types';

// Setup dispatch actions
const fetchQuestions = () => {
  return dispatch => {
    // Dispatch action request
    dispatch(actions.requestQuestions());
    return fetch(`${types.API}`)
      .then(response => response.json())
      .then(json => {
        const items = json.results ? json.results : [];
        const game = {
          total: items.length,
          visible: false,
          right: 0,
          questions: items.map((data, index) => ({
            question: data.question,
            index: index,
            category: data.category,
            right: data.correct_answer,
            answer: null
          }))
        };
        // dispatch action when finish the fetch and send the results
        dispatch(actions.receiveQuestions(items, game));
      });
  };
};

export default {
  fetchQuestions
};
