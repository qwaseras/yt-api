import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  ROUTE_PLAY_VIDEO,
  ROUTE_SEARCH_VIDEO,
} from './constants';
import Play from '../Play'
import Search from '../Search'
export default () =>
  <Switch>
    <Route
      exact
      path={ROUTE_PLAY_VIDEO}
      render={() =>
        <Play />
      } />
    <Route
      exact
      path={ROUTE_SEARCH_VIDEO}
      render={() =>
        <Search />
      }
    />
    <Redirect from="/" to={ROUTE_PLAY_VIDEO} />
  </Switch>

