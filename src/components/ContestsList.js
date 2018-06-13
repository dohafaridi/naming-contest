import React from 'react';
import PropTypes from 'prop-types';

import ContestPreview from './ContestPreview';

class ContestsList extends React.Component {
  render() {
    return this.props.contests.map(contest => (
      <ContestPreview
        key={contest.id}
        contest={contest}
        handleContestClick={this.props.handleContestClick}
      />
    ));
  }
}

ContestsList.propTypes = {
  handleContestClick: PropTypes.func,
};

export default ContestsList;
