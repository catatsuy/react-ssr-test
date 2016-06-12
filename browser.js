import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import AsyncProps from 'async-props';

const appElem = document.getElementById('app');

render((
  <Router
    history={browserHistory}
    routes={routes}
    render={(props) => <AsyncProps {...props} />}
  />
), appElem);
