import * as React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import TodoStore from './components/todo/stores/TodoStore';
import ViewStore from './components/todo/stores/ViewStore';
import TodoApp from './components/todo/todoApp';
import {createHistory} from 'history';

const browserHistory = useRouterHistory(createHistory)({ basename: '/' });

const RouterComp = () => (
  <Router history={browserHistory}>
    <Route path="/" component={TodoApp}>
      <IndexRoute component={TodoApp}/>
      <Route path="*" component={() => <div>404 not found</div>}/>
    </Route>
  </Router>
);

export default RouterComp;