import React from "react";

const Landing = ({ start, visible, onClick }) => (
  <div className={`landing  ${visible ? "show" : "hide"}`}>
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
      <button disabled={start} onClick={onClick}>
        BEGIN
      </button>
    </div>
  </div>
);

export default Landing;
