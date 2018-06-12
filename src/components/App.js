import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHeader: 'Contest preview',
      contests: this.props.initialContests,
    };
  }

  componentDidMount() {
    axios.get('/api/contests')
      .then(res => this.setState({ contests: res.data.contests }))
      .catch(error => console.error);
  }

  render() {
    return (
      <div className="App">
        <Header pageHeader={this.state.pageHeader} />
        {this.state.contests.map(contest => <ContestPreview key={contest.id} contest={contest} />)}
      </div>
    );
  }
}

App.propTypes = {
  contests: PropTypes.array,
};

export default App;
