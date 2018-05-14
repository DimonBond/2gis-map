import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Map from './pages/Main/Main.component';
import Author from './pages/Author/Author.component';
import Cabinet from './pages/Cabinet/Cabinet.component';
import Registration from './pages/Registration/Registration.component';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/author" component={Author} />
        <Route exact path="/map" component={Map} />
        <Route path="/cabinet" component={Cabinet} />
        <Route path="/registration" component={Registration} />
      </Switch>
    );
  }
}

export default Routes;
