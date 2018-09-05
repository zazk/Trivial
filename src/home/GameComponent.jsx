import React, { Fragment } from 'react';
// Receive states and action dispatch function
const GameComponent = ({
  end,
  game,
  active,
  playAgain,
  setActiveQuestion,
  visible,
  loading,
  showAnswer
}) => {
  // show questions
  return (
    <div className={visible ? 'show' : 'hide'}>
      {!loading ? (
        <div>
          {!end ? (
            <div className="game">
              <Question
                data={active}
                len={game.questions.length}
                showAnswer={showAnswer}
                onYes={() => setActiveQuestion(active, true)}
                onNo={() => setActiveQuestion(active, false)}
              />
            </div>
          ) : (
            <Results results={game} onPlayAgain={() => playAgain()} />
          )}
        </div>
      ) : (
        <div className="bar-actions">Loading Questions...</div>
      )}
    </div>
  );
};
const Question = ({ data, len, showAnswer, onYes, onNo }) => (
  <Fragment>
    <div>
      <h3 className="animate">{data.category}</h3>
      <div>
        {data.index + 1} of {len}
      </div>
    </div>
    <div className="question">
      <div>
        <div
          className="animate"
          dangerouslySetInnerHTML={{ __html: data.question }}
        />
      </div>
    </div>
    <div className="actions">
      <div className={showAnswer ? 'show' : 'hide'}>
        <Answer data={data} showQuestion={false} />
      </div>
      <div className={!showAnswer ? 'show' : 'hide'}>
        <button onClick={onNo}>FALSE</button>
        <button onClick={onYes}>TRUE</button>
      </div>
    </div>
  </Fragment>
);
const Results = ({ results, onPlayAgain }) => {
  return (
    <div className="results">
      <h3>
        You Scored: {results.right} of {results.total}{' '}
      </h3>
      <div className="answers">
        {results.questions.map((data, index) => (
          <Answer key={index} data={data} />
        ))}
      </div>
      <div className="actions">
        <button onClick={onPlayAgain}>PLAY AGAIN</button>
      </div>
    </div>
  );
};
const Answer = ({ data, showQuestion = true }) => {
  const isRight = data.right === data.answer;
  const comment = isRight ? 'Great, you were right!' : 'Wrong. Try next time';
  const className = isRight ? 'right' : 'wrong';
  return (
    <div className={'answer ' + className}>
      <div
        className={showQuestion ? 'show' : 'hide'}
        dangerouslySetInnerHTML={{ __html: data.question }}
      />
      <div className="comment">
        Your answer: <strong>{data.answer ? 'True' : 'False'}. </strong>
        {comment}
      </div>
    </div>
  );
};
export default GameComponent;
