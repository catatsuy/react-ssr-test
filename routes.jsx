import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import Main from './components/Main';
import Leaf from './components/Leaf';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Index} />
    <Route path="/leaf" component={Leaf} />
  </Route>
);
