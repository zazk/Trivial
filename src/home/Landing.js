import React from "react";
import PropTypes from "prop-types";

const Landing = ({ loading, visible, onClick, categories, handleCategory }) => {
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
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="actions">
        <button disabled={loading} onClick={() => onClick()}>
          BEGIN
        </button>
      </div>
    </div>
  );
};

Landing.defaultProps = {
  categories: []
};

Landing.propTypes = {
  start: PropTypes.bool,
  visible: PropTypes.bool,
  onClick: PropTypes.func
};

export default Landing;
