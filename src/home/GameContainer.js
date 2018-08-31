import { connect } from 'react-redux';
import GameComponent from './GameComponent';
import { homeOperations } from './state';
// set props to send to component
const mapStateToProps = (state, props) => {
  const { questions, loading } = state.home;
  const { visible } = props;
  const gameResults = {
    total: questions.length,
    visible: false,
    right: 0,
    questions: questions.map(data => ({
      question: data.question,
      right: data.correct_answer
    }))
  };
  return {
    questions,
    loading,
    visible,
    gameResults
  };
};
// manage dispatch action
const mapDispatchToProps = dispatch => {
  const fetchQuestions = () => {
    dispatch(homeOperations.fetchQuestions());
  };
  return { fetchQuestions };
};

// Pass to Component states and dispatch actions
const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);

export default GameContainer;
