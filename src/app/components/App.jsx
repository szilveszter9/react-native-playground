import React, { Component } from 'react';
import { NativeModules, Text } from 'react-native';

import { render } from 'react-dom';

import { applyRouterMiddleware, hashHistory, Router, Route, IndexRoute, Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import useScroll from 'react-router-scroll';

// Components
import MatchDay from './MatchDay.jsx';
import MatchActions from './MatchActions.jsx';

export class App extends Component {
  render() {
    return (
      <div id="main">
        <ReactCSSTransitionGroup
          component="div"
          className="page"
          transitionName="switchTransition"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={300}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={MatchDay}/>
    <Route path="/match-actions" component={MatchActions} />
  </Route>
);

export class AppRouter extends Component {
  render() {
    return (
      <Router
        history={this.props.history}
        render={this.props.render}
      >
        {routes}
      </Router>
    );
  }
}

export function startApp() {
  render(
    <AppRouter
      history={hashHistory}
      render={applyRouterMiddleware(useScroll())}
    />, document.getElementById('app'));
}
