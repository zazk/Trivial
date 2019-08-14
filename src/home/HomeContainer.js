import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { homeOperations } from "./state";
import actions from "./state/actions";

const mapStateToProps = state => {
  const { loading, start } = state.home;
  return {
    loading,
    start
  };
};

const mapDispatchToProps = dispatch => {
  const startGame = () => {
    dispatch(actions.startGame());
  };
  const fetchQuestions = () => {
    dispatch(homeOperations.fetchQuestions());
  };
  return { startGame, fetchQuestions };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
export default HomeContainer;
