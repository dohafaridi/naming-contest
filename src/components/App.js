import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestsList from './ContestsList';

const pushState = (stateObj, title, url) => history.pushState(stateObj, title, url);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHeader: 'Contest preview',
      contests: this.props.initialContests,
    };
  }

  fetchContest({ id, contestName }) {
    pushState(
      {
        contestID: id,
      },
      contestName,
      `/contest/${id}`
    );
  }

  render() {
    return (
      <div className="App">
        <Header pageHeader={this.state.pageHeader} />
        <ContestsList handleContestClick={this.fetchContest} contests={this.state.contests} />
      </div>
    );
  }
}

App.propTypes = {
  contests: PropTypes.array,
};

export default App;
