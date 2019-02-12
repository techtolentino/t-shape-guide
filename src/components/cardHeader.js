import PropTypes from "prop-types";
import React from "react";

const CardHeader = ({ children }) => (
  <div className="card--header">{children}</div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardHeader;
