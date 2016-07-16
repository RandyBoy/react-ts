import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import TodoStore from './stores/TodoStore';
const ENTER_KEY = 13;

@observer
export default class TodoEntry extends React.Component<{ todoStore: TodoStore }, {}> {

	render() {
		return (
			<input ref="newField"
				className="new-todo"
				placeholder="What needs to be done?"
				onKeyDown={this.handleNewTodoKeyDown}
				autoFocus={true}
				/>
		);
	}

	handleNewTodoKeyDown = (event) => {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		let val = (ReactDOM.findDOMNode(this.refs['newField']) as HTMLInputElement).value.trim();

		if (val) {
			this.props.todoStore.addTodo(val);
			(ReactDOM.findDOMNode(this.refs['newField']) as HTMLInputElement).value = '';
		}
	};
}

// TodoEntry.propTypes = {
// 	todoStore: React.PropTypes.object.isRequired
// };
