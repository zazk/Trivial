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
        // dispatch action when finish the fetch and send the results
        dispatch(actions.receiveQuestions(items));
      });
  };
};

export default {
  fetchQuestions
};
