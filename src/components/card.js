import PropTypes from "prop-types";
import React from "react";

const Card = ({ children }) => (
  <div className="card">
    <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
      <div className="bx--aspect-ratio--object">
        <div className="">{children}</div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
