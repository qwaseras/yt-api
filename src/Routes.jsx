import React from 'react';
import {  Route, Redirect, Switch } from 'react-router-dom';
import {
  ROUTE_PLAY_VIDEO,
  ROUTE_SEARCH_VIDEO,
} from './constants';

export default () =>
    <Switch>
      <Route
        exact
        path={ROUTE_PLAY_VIDEO}
        render={() =>
          <h1>play</h1>
        } />
      <Route
        exact
        path={ROUTE_SEARCH_VIDEO}
        render={() =>
          <h1>search</h1>
        }
      />
      <Redirect from="/" to={ROUTE_PLAY_VIDEO} />
    </Switch>

