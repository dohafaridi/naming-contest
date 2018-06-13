import React from "react";
import PropTypes from "prop-types";

const Header = ({ pageHeader }) => <div className="Header">{pageHeader}</div>;

Header.prototype = {
  pageHeader: PropTypes.string
};

export default Header;
