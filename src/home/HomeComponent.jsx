import React from 'react';
import GameContainer from './GameContainer';
// Just setup de wrapper to the Game Container.
class HomeComponent extends React.Component {
  state = { show: true };
  handleClick() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <Landing
          visible={this.state.show}
          onClick={this.handleClick.bind(this)}
        />
        <GameContainer visible={!this.state.show} />
      </div>
    );
  }
}
const Landing = ({ visible, onClick }) => (
  <div className={visible ? 'show' : 'hide'}>
    <div>Welcome to the Challenge</div>
    <div>
      You will be presented with
      <strong>True</strong>
      or
      <strong>False</strong>
      questions.
    </div>
    <div>Can you score 100%</div>
    <div>
      <button onClick={onClick}>BEGIN</button>
    </div>
  </div>
);
export default HomeComponent;
