import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
  const { path } = useRouteMatch();
  return (
    <>
      <h2>Whale</h2>
      <Switch>
        <Route path={`${path}/beluga`}>
          <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Switch>
    </>
  );
}