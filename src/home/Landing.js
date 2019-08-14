import React from "react";
import PropTypes from "prop-types";

const Landing = ({ start, visible, onClick, handleCategory }) => {
  //const [cat, setCat] = useState("");
  // const setCategory = () =>
  const setCategory = cat => {
    handleCategory(cat);
  };
  return (
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
      <div>
        <select onChange={e => setCategory(e.target.value)}>
          <option value={null}>Select</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className="actions">
        <button disabled={start} onClick={() => onClick()}>
          BEGIN
        </button>
      </div>
    </div>
  );
};

Landing.propTypes = {
  start: PropTypes.bool,
  visible: PropTypes.bool,
  onClick: PropTypes.func
};

export default Landing;
