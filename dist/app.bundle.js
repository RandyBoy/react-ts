/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(3);
	var Hello_1 = __webpack_require__(4);
	var app_routers_1 = __webpack_require__(5);
	var timerview_1 = __webpack_require__(36);
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));
	var appState = new timerview_1.AppState();
	ReactDOM.render(React.createElement(timerview_1.TimerView, {appState: appState}), document.getElementById('root'));
	ReactDOM.render(React.createElement(app_routers_1.default, null), document.getElementById('todoapp'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(7);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_dll_b58c50015ae0dc759b6a;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(84);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        return React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!");
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(6);
	var todoApp_1 = __webpack_require__(7);
	var history_1 = __webpack_require__(20);
	var browserHistory = react_router_1.useRouterHistory(history_1.createHistory)({ basename: '/' });
	var RouterComp = function () { return (React.createElement(react_router_1.Router, {history: browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: todoApp_1.default}, React.createElement(react_router_1.IndexRoute, {component: todoApp_1.default}), React.createElement(react_router_1.Route, {path: "*", component: function () { return React.createElement("div", null, "404 not found"); }})))); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterComp;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(163);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(1);
	var mobx_react_1 = __webpack_require__(8);
	var todoEntry_1 = __webpack_require__(9);
	var todoOverview_1 = __webpack_require__(10);
	var todoFooter_1 = __webpack_require__(13);
	var mobx_react_devtools_1 = __webpack_require__(15);
	var TodoStore_1 = __webpack_require__(16);
	var ViewStore_1 = __webpack_require__(19);
	// var Router = require('react-router').Router;
	// 	var Route = require('react-router').Route;
	// 	var Link = require('react-router').Link;
	var TodoApp = (function (_super) {
	    __extends(TodoApp, _super);
	    function TodoApp() {
	        _super.call(this);
	        var initialState = window.hasOwnProperty('initialState') ? window['initialState'] : {};
	        this.todoStore = TodoStore_1.default.fromJS(initialState.todos || []);
	        this.viewStore = new ViewStore_1.default();
	        this.todoStore.subscribeServerToStore();
	    }
	    TodoApp.prototype.render = function () {
	        var _a = this.props, todoStore = _a.todoStore, viewStore = _a.viewStore;
	        if (todoStore) {
	            this.todoStore = todoStore;
	        }
	        if (viewStore) {
	            this.viewStore = viewStore;
	        }
	        return (React.createElement("div", null, React.createElement(mobx_react_devtools_1.default, null), React.createElement("header", {className: "header"}, React.createElement("h1", null, "todos"), React.createElement(todoEntry_1.default, {todoStore: this.todoStore})), React.createElement(todoOverview_1.default, {todoStore: this.todoStore, viewStore: this.viewStore}), React.createElement(todoFooter_1.default, {todoStore: this.todoStore, viewStore: this.viewStore})));
	    };
	    TodoApp.prototype.componentDidMount = function () {
	        var viewStore = this.props.viewStore;
	        // let router = Router({
	        // 	'/': function () { viewStore.todoFilter = ALL_TODOS; },
	        // 	'/active': function () { viewStore.todoFilter = ACTIVE_TODOS; },
	        // 	'/completed': function () { viewStore.todoFilter = COMPLETED_TODOS; }
	        // });
	        // router.init('/');
	        // not using an ES6 transpiler
	    };
	    TodoApp = __decorate([
	        mobx_react_1.observer, 
	        __metadata('design:paramtypes', [])
	    ], TodoApp);
	    return TodoApp;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoApp;
	// TodoApp.propTypes = {
	// 	viewStore: React.PropTypes.object.isRequired,
	// 	todoStore: React.PropTypes.object.isRequired
	// };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(83);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(3);
	var mobx_react_1 = __webpack_require__(8);
	var ENTER_KEY = 13;
	var TodoEntry = (function (_super) {
	    __extends(TodoEntry, _super);
	    function TodoEntry() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleNewTodoKeyDown = function (event) {
	            if (event.keyCode !== ENTER_KEY) {
	                return;
	            }
	            event.preventDefault();
	            var val = ReactDOM.findDOMNode(_this.refs['newField']).value.trim();
	            if (val) {
	                _this.props.todoStore.addTodo(val);
	                ReactDOM.findDOMNode(_this.refs['newField']).value = '';
	            }
	        };
	    }
	    TodoEntry.prototype.render = function () {
	        return (React.createElement("input", {ref: "newField", className: "new-todo", placeholder: "What needs to be done?", onKeyDown: this.handleNewTodoKeyDown, autoFocus: true}));
	    };
	    TodoEntry = __decorate([
	        mobx_react_1.observer, 
	        __metadata('design:paramtypes', [])
	    ], TodoEntry);
	    return TodoEntry;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoEntry;
	// TodoEntry.propTypes = {
	// 	todoStore: React.PropTypes.object.isRequired
	// };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(1);
	var mobx_react_1 = __webpack_require__(8);
	var constants_1 = __webpack_require__(11);
	var todoItem_1 = __webpack_require__(12);
	var TodoOverview = (function (_super) {
	    __extends(TodoOverview, _super);
	    function TodoOverview() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.toggleAll = function (event) {
	            var checked = event.target.checked;
	            _this.props.todoStore.toggleAll(checked);
	        };
	    }
	    TodoOverview.prototype.render = function () {
	        var _a = this.props, todoStore = _a.todoStore, viewStore = _a.viewStore;
	        if (todoStore.todos.length === 0)
	            return null;
	        return React.createElement("section", {className: "main"}, React.createElement("input", {className: "toggle-all", type: "checkbox", onChange: this.toggleAll, checked: todoStore.activeTodoCount === 0}), React.createElement("ul", {className: "todo-list"}, this.getVisibleTodos().map(function (todo) {
	            return (React.createElement(todoItem_1.default, {key: todo.id, todo: todo, viewStore: viewStore}));
	        })));
	    };
	    TodoOverview.prototype.getVisibleTodos = function () {
	        var _this = this;
	        return this.props.todoStore.todos.filter(function (todo) {
	            switch (_this.props.viewStore.todoFilter) {
	                case constants_1.ACTIVE_TODOS:
	                    return !todo.completed;
	                case constants_1.COMPLETED_TODOS:
	                    return todo.completed;
	                default:
	                    return true;
	            }
	        });
	    };
	    TodoOverview = __decorate([
	        mobx_react_1.observer, 
	        __metadata('design:paramtypes', [])
	    ], TodoOverview);
	    return TodoOverview;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoOverview;
	// TodoOverview.propTypes = {
	// 	viewStore: React.PropTypes.object.isRequired,
	// 	todoStore: React.PropTypes.object.isRequired
	// }


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	exports.ALL_TODOS = 'all';
	exports.ACTIVE_TODOS = 'active';
	exports.COMPLETED_TODOS = 'completed';


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(1);
	var mobx_react_1 = __webpack_require__(8);
	var ESCAPE_KEY = 27;
	var ENTER_KEY = 13;
	var TodoItem = (function (_super) {
	    __extends(TodoItem, _super);
	    function TodoItem(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.handleSubmit = function (event) {
	            var val = _this.state['editText'].trim();
	            if (val) {
	                _this.props.todo.setTitle(val);
	                _this.setState({ editText: val });
	            }
	            else {
	                _this.handleDestroy();
	            }
	            _this.props.viewStore.todoBeingEdited = null;
	        };
	        this.handleDestroy = function () {
	            _this.props.todo.destroy();
	            _this.props.viewStore.todoBeingEdited = null;
	        };
	        this.handleEdit = function () {
	            var todo = _this.props.todo;
	            _this.props.viewStore.todoBeingEdited = todo;
	            _this.setState({ editText: todo.title });
	        };
	        this.handleKeyDown = function (event) {
	            if (event.which === ESCAPE_KEY) {
	                _this.setState({ editText: _this.props.todo.title });
	                _this.props.viewStore.todoBeingEdited = null;
	            }
	            else if (event.which === ENTER_KEY) {
	                _this.handleSubmit(event);
	            }
	        };
	        this.handleChange = function (event) {
	            _this.setState({ editText: event.target.value });
	        };
	        this.handleToggle = function () {
	            _this.props.todo.toggle();
	        };
	        this.state = { editText: props.todo.title };
	    }
	    TodoItem.prototype.render = function () {
	        var _a = this.props, viewStore = _a.viewStore, todo = _a.todo;
	        return (React.createElement("li", {className: [
	            todo.completed ? "completed" : "",
	            todo === viewStore.todoBeingEdited ? "editing" : ""
	        ].join(" ")}, React.createElement("div", {className: "view"}, React.createElement("input", {className: "toggle", type: "checkbox", checked: todo.completed, onChange: this.handleToggle}), React.createElement("label", {onDoubleClick: this.handleEdit}, todo.title), React.createElement("button", {className: "destroy", onClick: this.handleDestroy})), React.createElement("input", {ref: "editField", className: "edit", value: this.state['editText'], onBlur: this.handleSubmit, onChange: this.handleChange, onKeyDown: this.handleKeyDown})));
	    };
	    TodoItem = __decorate([
	        mobx_react_1.observer, 
	        __metadata('design:paramtypes', [Object, Object])
	    ], TodoItem);
	    return TodoItem;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoItem;
	// TodoItem.propTypes = {
	// 	todo: React.PropTypes.object.isRequired,
	// 	viewStore: React.PropTypes.object.isRequired
	// };


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(1);
	var mobx_react_1 = __webpack_require__(8);
	var utils_1 = __webpack_require__(14);
	var constants_1 = __webpack_require__(11);
	var TodoFooter = (function (_super) {
	    __extends(TodoFooter, _super);
	    function TodoFooter() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.clearCompleted = function () {
	            _this.props.todoStore.clearCompleted();
	        };
	    }
	    TodoFooter.prototype.render = function () {
	        var todoStore = this.props.todoStore;
	        if (!todoStore.activeTodoCount && !todoStore.completedCount)
	            return null;
	        var activeTodoWord = utils_1.pluralize(todoStore.activeTodoCount, 'item');
	        return (React.createElement("footer", {className: "footer"}, React.createElement("span", {className: "todo-count"}, React.createElement("strong", null, todoStore.activeTodoCount), " ", activeTodoWord, " left"), React.createElement("ul", {className: "filters"}, this.renderFilterLink(constants_1.ALL_TODOS, "", "All"), this.renderFilterLink(constants_1.ACTIVE_TODOS, "active", "Active"), this.renderFilterLink(constants_1.COMPLETED_TODOS, "completed", "Completed")), todoStore.completedCount === 0
	            ? null
	            : React.createElement("button", {className: "clear-completed", onClick: this.clearCompleted}, "Clear completed")));
	    };
	    TodoFooter.prototype.renderFilterLink = function (filterName, url, caption) {
	        return (React.createElement("li", null, React.createElement("a", {href: "#/" + url, className: filterName === this.props.viewStore.todoFilter ? "selected" : ""}, caption), ' '));
	    };
	    TodoFooter = __decorate([
	        mobx_react_1.observer, 
	        __metadata('design:paramtypes', [])
	    ], TodoFooter);
	    return TodoFooter;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoFooter;
	// TodoFooter.propTypes = {
	// 	viewStore: React.PropTypes.object.isRequired,
	// 	todoStore: React.PropTypes.object.isRequired
	// }


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	function uuid() {
	    /*jshint bitwise:false */
	    var i, random;
	    var uuid = '';
	    for (i = 0; i < 32; i++) {
	        random = Math.random() * 16 | 0;
	        if (i === 8 || i === 12 || i === 16 || i === 20) {
	            uuid += '-';
	        }
	        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
	            .toString(16);
	    }
	    return uuid;
	}
	exports.uuid = uuid;
	function pluralize(count, word) {
	    return count === 1 ? word : word + 's';
	}
	exports.pluralize = pluralize;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(145);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var mobx_1 = __webpack_require__(17);
	var TodoModel_1 = __webpack_require__(18);
	var Utils = __webpack_require__(14);
	var TodoStore = (function () {
	    function TodoStore() {
	        this.todos = [];
	    }
	    Object.defineProperty(TodoStore.prototype, "activeTodoCount", {
	        get: function () {
	            return this.todos.reduce(function (sum, todo) { return sum + (todo.completed ? 0 : 1); }, 0);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TodoStore.prototype, "completedCount", {
	        get: function () {
	            return this.todos.length - this.activeTodoCount;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TodoStore.prototype.subscribeServerToStore = function (model) {
	        // autorun(() => {
	        //   const todos = this.toJS();
	        //   if (this.subscribedServerToModel !== true) {
	        //     this.subscribedServerToModel = true;
	        //     return;
	        //   }
	        //   fetch('/api/todos', {
	        //     method: 'post',
	        //     body: JSON.stringify({ todos }),
	        //     headers: new Headers({ 'Content-Type': 'application/json' })
	        //   })
	        // });
	    };
	    TodoStore.prototype.addTodo = function (title) {
	        this.todos.push(new TodoModel_1.default(this, Utils.uuid(), title, false));
	    };
	    TodoStore.prototype.toggleAll = function (checked) {
	        this.todos.forEach(function (todo) { return todo.completed = checked; });
	    };
	    TodoStore.prototype.clearCompleted = function () {
	        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
	    };
	    TodoStore.prototype.toJS = function () {
	        return this.todos.map(function (todo) { return todo.toJS(); });
	    };
	    TodoStore.fromJS = function (array) {
	        var todoStore = new TodoStore();
	        todoStore.todos = array.map(function (item) { return TodoModel_1.default.fromJS(todoStore, item); });
	        return todoStore;
	    };
	    __decorate([
	        mobx_1.observable, 
	        __metadata('design:type', Object)
	    ], TodoStore.prototype, "todos", void 0);
	    __decorate([
	        mobx_1.computed, 
	        __metadata('design:type', Object)
	    ], TodoStore.prototype, "activeTodoCount", null);
	    __decorate([
	        mobx_1.computed, 
	        __metadata('design:type', Object)
	    ], TodoStore.prototype, "completedCount", null);
	    return TodoStore;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoStore;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(51);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var mobx_1 = __webpack_require__(17);
	var TodoModel = (function () {
	    function TodoModel(store, id, title, completed) {
	        this.store = store;
	        this.id = id;
	        this.title = title;
	        this.completed = completed;
	    }
	    TodoModel.prototype.toggle = function () {
	        this.completed = !this.completed;
	    };
	    TodoModel.prototype.destroy = function () {
	        this.store.todos.remove(this);
	    };
	    TodoModel.prototype.setTitle = function (title) {
	        this.title = title;
	    };
	    TodoModel.prototype.toJS = function () {
	        return {
	            id: this.id,
	            title: this.title,
	            completed: this.completed
	        };
	    };
	    TodoModel.fromJS = function (store, object) {
	        return new TodoModel(store, object.id, object.title, object.completed);
	    };
	    __decorate([
	        mobx_1.observable, 
	        __metadata('design:type', Object)
	    ], TodoModel.prototype, "title", void 0);
	    __decorate([
	        mobx_1.observable, 
	        __metadata('design:type', Object)
	    ], TodoModel.prototype, "completed", void 0);
	    return TodoModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoModel;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var mobx_1 = __webpack_require__(17);
	var constants_1 = __webpack_require__(11);
	var ViewStore = (function () {
	    function ViewStore() {
	        this.todoBeingEdited = null;
	        this.todoFilter = constants_1.ALL_TODOS;
	    }
	    __decorate([
	        mobx_1.observable, 
	        __metadata('design:type', Object)
	    ], ViewStore.prototype, "todoBeingEdited", void 0);
	    __decorate([
	        mobx_1.observable, 
	        __metadata('design:type', Object)
	    ], ViewStore.prototype, "todoFilter", void 0);
	    return ViewStore;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ViewStore;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(21);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _createLocation2 = __webpack_require__(22);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _createBrowserHistory = __webpack_require__(23);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	exports.createHistory = _createBrowserHistory2['default'];
	
	var _createHashHistory2 = __webpack_require__(24);
	
	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
	
	exports.createHashHistory = _createHashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(25);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];
	
	var _useBasename2 = __webpack_require__(26);
	
	var _useBasename3 = _interopRequireDefault(_useBasename2);
	
	exports.useBasename = _useBasename3['default'];
	
	var _useBeforeUnload2 = __webpack_require__(27);
	
	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
	
	exports.useBeforeUnload = _useBeforeUnload3['default'];
	
	var _useQueries2 = __webpack_require__(32);
	
	var _useQueries3 = _interopRequireDefault(_useQueries2);
	
	exports.useQueries = _useQueries3['default'];
	
	var _Actions2 = __webpack_require__(33);
	
	var _Actions3 = _interopRequireDefault(_Actions2);
	
	exports.Actions = _Actions3['default'];
	
	// deprecated
	
	var _enableBeforeUnload2 = __webpack_require__(34);
	
	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
	
	exports.enableBeforeUnload = _enableBeforeUnload3['default'];
	
	var _enableQueries2 = __webpack_require__(35);
	
	var _enableQueries3 = _interopRequireDefault(_enableQueries2);
	
	exports.enableQueries = _enableQueries3['default'];
	var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
	exports.createLocation = createLocation;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(49);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(142);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(141);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(80);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(143);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(82);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(29);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(30);
	
	var _DOMUtils = __webpack_require__(31);
	
	var _deprecate = __webpack_require__(21);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();
	
	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }
	
	  _DOMUtils.addEventListener(window, 'beforeunload', listener);
	
	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}
	
	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);
	
	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];
	
	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;
	
	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }
	
	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);
	
	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }
	
	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }
	
	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);
	
	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }
	
	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }
	
	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,
	
	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}
	
	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(14);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(37);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(48);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(38);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(26);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(21);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useBeforeUnload = __webpack_require__(27);
	
	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
	
	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(21);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useQueries = __webpack_require__(32);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var React = __webpack_require__(1);
	var mobx_1 = __webpack_require__(17);
	var mobx_react_1 = __webpack_require__(8);
	var mobx_react_devtools_1 = __webpack_require__(15);
	var AppState = (function () {
	    function AppState() {
	        var _this = this;
	        this.timer = 0;
	        setInterval(function () {
	            _this.timer += 1;
	        }, 1000);
	    }
	    AppState.prototype.resetTimer = function () {
	        this.timer = 0;
	    };
	    __decorate([
	        mobx_1.observable, 
	        __metadata('design:type', Object)
	    ], AppState.prototype, "timer", void 0);
	    return AppState;
	}());
	exports.AppState = AppState;
	var TimerView = (function (_super) {
	    __extends(TimerView, _super);
	    function TimerView() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.onReset = function () {
	            _this.props.appState.resetTimer();
	        };
	    }
	    TimerView.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("button", {onClick: this.onReset}, "Seconds passed: ", this.props.appState.timer), React.createElement(mobx_react_devtools_1.default, null)));
	    };
	    TimerView = __decorate([
	        mobx_react_1.observer, 
	        __metadata('design:paramtypes', [])
	    ], TimerView);
	    return TimerView;
	}(React.Component));
	exports.TimerView = TimerView;
	;


/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map