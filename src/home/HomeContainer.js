import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { homeOperations } from "./state";
import actions from "./state/actions";

const mapStateToProps = state => {
  const { loading, start, game } = state.home;
  return {
    loading,
    start,
    categories: game.categories
  };
};

const mapDispatchToProps = dispatch => {
  const startGame = () => {
    dispatch(actions.startGame());
  };
  const fetchQuestions = cat => {
    dispatch(homeOperations.fetchQuestions(cat));
  };
  return { startGame, fetchQuestions };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
export default HomeContainer;
