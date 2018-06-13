import React from 'react';
import PropTypes from 'prop-types';

class contestPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleContestClick(this.props.contest);
  }

  render() {
    const { contestName, categoryName } = this.props.contest;
    return (
      <div className="contestPreview" onClick={this.handleClick}>
        <div className="contestPreview__name">{contestName}</div>
        <div className="contestPreview__category">{categoryName}</div>
      </div>
    );
  }
}

contestPreview.propTypes = {
  contest: PropTypes.object,
  handleContestClick: PropTypes.func,
};

export default contestPreview;
