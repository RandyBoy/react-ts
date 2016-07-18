import * as React from 'react';
import {observer} from 'mobx-react';
import {Router, Link, Route} from 'react-router';

import TodoEntry from './todoEntry';
import TodoOverview from './todoOverview';
import TodoFooter from './todoFooter';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants';

import DevTool from 'mobx-react-devtools';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';

// var Router = require('react-router').Router;
// 	var Route = require('react-router').Route;
// 	var Link = require('react-router').Link;
require('./css/base.css');
require('./css/app.css');
require('antd/dist/antd.min.css');

@observer
export default class TodoApp extends React.Component<{ todoStore: TodoStore, viewStore: ViewStore }, {}> {

	todoStore: TodoStore;
	viewStore: ViewStore;

	constructor() {
		super();
		let initialState = window.hasOwnProperty('initialState') ? window['initialState'] : {};
		this.todoStore = TodoStore.fromJS(initialState.todos || []);
		this.viewStore = new ViewStore();
		this.todoStore.subscribeServerToStore();
	}

	render() {
		let {todoStore, viewStore} = this.props;
		if (todoStore) {
			this.todoStore = todoStore;
		}
		if (viewStore) {
			this.viewStore = viewStore;
		}

		return (
			<div>
				<DevTool />
				<header className="header">
					<h1>todos</h1>
					<TodoEntry todoStore={this.todoStore} />
				</header>
				<TodoOverview todoStore={this.todoStore} viewStore={this.viewStore} />
				<TodoFooter todoStore={this.todoStore} viewStore={this.viewStore} />
			</div>
		);
	}

	componentDidMount() {
		let viewStore = this.props.viewStore;
		// let router = Router({
		// 	'/': function () { viewStore.todoFilter = ALL_TODOS; },
		// 	'/active': function () { viewStore.todoFilter = ACTIVE_TODOS; },
		// 	'/completed': function () { viewStore.todoFilter = COMPLETED_TODOS; }
		// });
		// router.init('/');

		// not using an ES6 transpiler
	}

}

// TodoApp.propTypes = {
// 	viewStore: React.PropTypes.object.isRequired,
// 	todoStore: React.PropTypes.object.isRequired
// };
