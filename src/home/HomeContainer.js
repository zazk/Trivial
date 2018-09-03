import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './state';
const mapStateToProps = state => {
  const { loading } = state.home;
  return {
    loading
  };
};
const mapDispatchToProps = dispatch => {
  const fetchQuestions = () => {
    dispatch(homeOperations.fetchQuestions());
  };
  return { fetchQuestions };
};
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
export default HomeContainer;
