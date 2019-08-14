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
        const items = json.results ? json.results : [];
        const categories = {};
        items.map(item => (categories[item.category] = true));
        const questions = (!category
          ? items
          : items.filter(question => question.category.indexOf(category) >= 0)
        ).map((data, index) => ({
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
          questions: questions,
          categories: Object.keys(categories)
        };
        // dispatch action when finish the fetch and send the results
        dispatch(actions.receiveQuestions(items, game));
      });
  };
};

export default {
  fetchQuestions
};
