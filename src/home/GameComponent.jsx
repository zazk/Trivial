import React from 'react';
// Receive states and action dispatch function
const GameComponent = ({
  end,
  game,
  active,
  playAgain,
  setActiveQuestion,
  visible,
  loading
}) => {
  // show questions
  return (
    <div className={visible ? 'show' : 'hide'}>
      {!loading ? (
        <div>
          {!end ? (
            <div className="game">
              <div>
                <Question
                  data={active}
                  len={game.questions.length}
                  onYes={() => setActiveQuestion(active, true)}
                  onNo={() => setActiveQuestion(active, false)}
                />
              </div>
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
const Question = ({ data, len, onYes, onNo }) => (
  <div>
    <h3>{data.category}</h3>
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.question }} />
    </div>
    <div>
      {data.index + 1} of {len}
    </div>
    <div>
      <button onClick={onNo}>FALSE</button>
      <button onClick={onYes}>TRUE</button>
    </div>
  </div>
);
const Results = ({ results, onPlayAgain }) => (
  <div>
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
