import { connect } from 'react-redux';
import GameComponent from './GameComponent';
import actions from './state/actions';
import { homeOperations } from './state';
// set props to send to component
const mapStateToProps = (state, props) => {
  const { loading, active, game, end } = state.home;
  const { visible } = props;
  return {
    end,
    game,
    active,
    loading,
    visible
  };
};
// manage dispatch action
const mapDispatchToProps = dispatch => {
  const setActiveQuestion = (item, answer) => {
    dispatch(actions.setActiveQuestion(item, answer));
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
