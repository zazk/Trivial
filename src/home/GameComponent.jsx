import React from 'react';
// Receive states and action dispatch function
class GameComponent extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }
  handleClick() {
    this.setState({ visible: false });
  }
  // show questions
  render() {
    return (
      <div className={this.props.visible ? 'show' : 'hide'}>
        <div className="game">
          {!this.props.loading ? (
            <div>
              {this.props.questions.map((data, index) => (
                <Question
                  key={index}
                  index={index + 1}
                  data={data}
                  len={this.props.questions.length}
                />
              ))}
            </div>
          ) : (
            <div className="bar-actions">Loading Questions...</div>
          )}
        </div>
        <Results
          results={this.props.gameResults}
          onPlayAgain={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
const Question = ({ data, index, len }) => (
  <div>
    <h3>{data.category}</h3>
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.question }} />
    </div>
    <div>
      {index} of {len}
    </div>
    <div>
      <button>FALSE</button>
      <button>TRUE</button>
    </div>
  </div>
);
const Results = ({ results, onPlayAgain }) => (
  <div className={results.visible ? 'show' : 'hide'}>
    <h3>
      You Scored: {results.right} of {results.total}{' '}
    </h3>
    <div className="answers">
      {results.questions.map((data, index) => (
        <div key={index} className="answer">
          <div>{!data.right ? '-' : '+'}</div>
          <div dangerouslySetInnerHTML={{ __html: data.question }} />
        </div>
      ))}
    </div>
    <div>
      <button onClick={onPlayAgain}>PLAY AGAIN</button>
    </div>
  </div>
);
export default GameComponent;
