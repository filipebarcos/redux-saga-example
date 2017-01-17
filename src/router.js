import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import UsersIndex from './pages/users/Index';

const MyRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={UsersIndex} />
  </Router>
);

export default MyRouter;
