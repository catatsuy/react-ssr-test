import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import Main from './components/Main';
import Leaf from './components/Leaf';
import routes from './routes';
import AsyncProps from 'async-props'

const appElem = document.getElementById('app');
const json = appElem.dataset.initialProps;
const initialProps = JSON.parse(json);

render((
  <Router history={browserHistory} routes={routes} render={(props) => <AsyncProps {...props}/>} />
), appElem)
