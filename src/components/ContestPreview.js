import React from "react";
import PropTypes from "prop-types";

const contestPreview = ({ contest }) => (
  <div className="contestPreview">
    <div className="contestPreview__name">{contest.contestName}</div>
    <div className="contestPreview__category">{contest.categoryName}</div>
  </div>
);

contestPreview.prototype = {
  contest: PropTypes.object
};

export default contestPreview;
