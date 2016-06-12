import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

const appElem = document.getElementById('app');
const json = appElem.dataset.initialProps;
const initialProps = JSON.parse(json);

ReactDOM.render(
  <Main {...initialProps} />
  , appElem
);
