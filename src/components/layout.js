import React from "react";
import PropTypes from "prop-types";

import "../styles/index.scss";

const Layout = ({ children }) => (
    <main className="main">{children}</main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
