import actions from "./actions";
import types from "./types";

// Setup dispatch actions
const fetchQuestions = category => {
  return dispatch => {
    // Dispatch action request
    dispatch(actions.requestQuestions());
    return fetch(`${types.API}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        let items = json.results ? json.results : [];
        let questions = !category
          ? items
          : items.filter(question => question.category.indexOf(category) >= 0);
        questions = questions.map((data, index) => ({
          question: data.question,
          index: index,
          category: data.category,
          right: data.correct_answer === "True",
          answer: null
        }));

        const game = {
          total: questions.length,
          visible: false,
          right: 0,
          questions: questions
        };

        console.log("GPGPGP", game);
        // dispatch action when finish the fetch and send the results
        dispatch(actions.receiveQuestions(items, game));
      });
  };
};

export default {
  fetchQuestions
};
