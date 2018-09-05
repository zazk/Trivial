import { connect } from 'react-redux';
import GameComponent from './GameComponent';
import actions from './state/actions';
import { homeOperations } from './state';
// set props to send to component
const mapStateToProps = (state, props) => {
  const { loading, active, game, end, showAnswer } = state.home;
  const { visible } = props;
  return {
    end,
    game,
    active,
    loading,
    visible,
    showAnswer
  };
};
// manage dispatch action
const mapDispatchToProps = dispatch => {
  const setActiveQuestion = (item, answer) => {
    setTimeout(() => dispatch(actions.setActiveQuestion(item)), 2000);
    dispatch(actions.showAnswer(item, answer));
  };
  const playAgain = () => {
    dispatch(homeOperations.fetchQuestions());
    dispatch(actions.playAgain());
  };
  return { setActiveQuestion, playAgain };
};
// Pass to Component states and dispatch actions
const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);

export default GameContainer;
