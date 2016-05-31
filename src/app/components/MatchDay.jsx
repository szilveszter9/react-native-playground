import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import { getJSON } from '../lib/http.js';
import MatchStore from '../stores/MatchStore.js';
import ViewActionCreators from '../actions/ViewActionCreators.js';
import { Texts } from '../Constants.js';

export default class MatchDay extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    MatchStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadMatch();
  }

  componentWillUnmount() {
    MatchStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange() {
    this.setState(MatchStore.getState());
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let matchData = this.state.data;

    if(this.state.data)
      return (
        <div>
          <Link to="/details">
            <div className="Match">
              <h1>{Texts.matchHead}</h1>
              <Total amount={matchData.total} />
            </div>
          </Link>
        </div>
      );
    else
      return (
        <div className="Error">{Texts.errorMessage}</div>
      );
  }
}

Match.propTypes = {
  data: React.PropTypes.shape({
  })
};
