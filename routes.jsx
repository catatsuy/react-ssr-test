import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import Leaf from './components/Leaf'

export default (
  <Route path="/">
    <IndexRoute component={Main}/>
    <Route path="/leaf" component={Leaf}/>
  </Route>
)
