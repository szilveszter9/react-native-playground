import React from 'react';

// to extend
import App from './App.jsx';

// Components (rendered from this class)
import GoBack from './GoBack.jsx';

export default class Details extends App {
  render() {
    if(!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let matchData = this.state.data;

    return (
      <div className="MatchDay">
        <GoBack />
      </div>
    );
  }
}

Details.propTypes = {
  data: React.PropTypes.shape({
  })
};
