import { connect } from 'react-redux';
import GameComponent from './GameComponent';
import { homeOperations } from './state';
// set props to send to component
const mapStateToProps = state => {
  console.log('STATE', state);
  const { questions, loading } = state.home;
  return {
    questions,
    loading
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
