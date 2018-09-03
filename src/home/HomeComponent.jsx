import React, { Component, Fragment } from 'react';
import GameContainer from './GameContainer';
// Just setup de wrapper to the Game Container.
class HomeComponent extends Component {
  state = { show: true };
  componentDidMount() {
    this.props.fetchQuestions();
  }
  handleClick() {
    this.setState({ show: false });
  }
  render() {
    return (
      <Fragment>
        <Landing
          visible={this.state.show}
          onClick={this.handleClick.bind(this)}
        />
        <GameContainer visible={!this.state.show} />
      </Fragment>
    );
  }
}
const Landing = ({ visible, onClick }) => (
  <div className={'landing ' + (visible ? 'show' : 'hide')}>
    <h4>Welcome to the Challenge</h4>
    <div className="landing-content">
      <div>
        You will be presented with
        <strong> True </strong>
        or
        <strong> False </strong>
        questions.
      </div>
      <div>Can you score 100%?</div>
    </div>
    <div className="actions">
      <button onClick={onClick}>BEGIN</button>
    </div>
  </div>
);
export default HomeComponent;
