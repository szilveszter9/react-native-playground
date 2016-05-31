import React, { Component } from 'react';
import { Router, RouterContext, hashHistory } from 'react-router';
import { Texts } from '../Constants.js';

export default class GoBack extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  render() {
    return (
      <a href="#" onClick={this.goBack}>
        <div className="GoBack">{Texts.goBack}</div>
      </a>
    );
  }

  goBack(e){
    e.preventDefault();
    this.context.router.goBack();
  }
}

GoBack.contextTypes = {
  router: React.PropTypes.object
};
