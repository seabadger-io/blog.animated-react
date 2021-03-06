import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './App.css';

import Aux from './components/UI/Aux/Aux';
import PageLoader from './components/UI/PageLoader/PageLoader';
import Navigation from './components/Navigation/Navigation';
import IndexPage from './components/Pages/Index';
import RectanglePage from './components/Pages/Rectangle/Rectangle';
import CirclePage from './components/Pages/Circle/Circle';

class App extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.App}>
          <Navigation />
          <Switch>
            <Route path="/" component={PageLoader(IndexPage)} exact />
            <Route path="/circle" component={PageLoader(CirclePage)} />
            <Route path="/rectangle" component={PageLoader(RectanglePage)} />
          </Switch>
        </div>
      </Aux>
    );
  }
}

export default App;
