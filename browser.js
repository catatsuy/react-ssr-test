import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Leaf from './components/Leaf';

const appElem = document.getElementById('app');
const json = appElem.dataset.initialProps;
const initialProps = JSON.parse(json);

if (location.pathname === '/') {
  ReactDOM.render(
    <Main {...initialProps} />
    , appElem
  );
} else if (location.pathname === '/leaf') {
  ReactDOM.render(
    <Leaf {...initialProps} />
    , appElem
  );
}
