import React from 'react';
// Receive states and action dispatch function
class GameComponent extends React.Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }
  // show questions
  render() {
    return (
      <div>
        <h4>Trivia Game</h4>
        {!this.props.loading ? (
          <div>
            {this.props.questions.map((data, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: data.question }}
              />
            ))}
            {''}
          </div>
        ) : (
          <div className="bar-actions">Loading Questions...</div>
        )}
      </div>
    );
  }
}
export default GameComponent;
