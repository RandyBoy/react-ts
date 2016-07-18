webpackJsonp([0,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(3);
	var Hello_1 = __webpack_require__(4);
	var app_routers_1 = __webpack_require__(5);
	//  import {TimerView, AppState} from './components/timeview/timerview';
	// declare module abc {
	//    declare class require {
	//        ensure()
	//    }
	// }
	// interface NodeRequirejs {
	//     (modules: string[] | string, callback?: Function): any;
	// }
	// interface Requirejs extends NodeRequirejs {
	//     resolve(id: string): string;
	//     cache: any;
	//     extensions: any;
	//     main: any;
	//     ensure(modules: string[], callback?: Function)
	// }
	// declare var require: Requirejs;
	//declare var require;
	// import TimerView = require('./components/timeview/timerview');
	// var tv: typeof TimerView = require('./components/timeview/timerview');
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));
	setTimeout(function () {
	    __webpack_require__.e/* nsure */(1, function (req) { console.log('异步模板加载成功1.'); });
	    //  require.ensure(['./components/pur'], (req) => { console.log('采购模块异步加载成功.'); });
	    __webpack_require__.e/* nsure */(2, function (req) {
	        var sale = __webpack_require__(31); //list={saleState.list} compiler={saleState.compiler} framework={saleState.framework}
	        var saleState = { list: [1, 2], compiler: "TypeScript", framework: "React" };
	        ReactDOM.render(React.createElement(sale.SaleComponent, {saleStore: saleState}), document.getElementById("example"));
	        console.log('销售模块异步加载成功.');
	    });
	    __webpack_require__.e/* require */(3, function() {[__webpack_require__(33)];});
	    //  require(['./components/sale']);
	}, 3000);
	setTimeout(function () {
	    //异步模块加载方式一
	    // import TimerView = require('./components/timeview');
	    // require(['./components/timeview'], (tv : typeof TimerView) => {
	    //     const appState = new tv.AppState();
	    //     ReactDOM.render(<tv.TimerView appState={appState} />, document.getElementById('root'));
	    // });
	    __webpack_require__.e/* nsure */(1/* duplicate */, function (req) {
	        var showMsg = __webpack_require__(28);
	        var tv = __webpack_require__(29);
	        var appState = new tv.AppState();
	        ReactDOM.render(React.createElement(tv.TimerView, {appState: appState}), document.getElementById('root'));
	        showMsg('异步模块加载完成B');
	    });
	}, 10000);
	ReactDOM.render(React.createElement(app_routers_1.default, null), document.getElementById('todoapp'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(7);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_dll_bcf5c1fa82eb0166b33b;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(92);

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
	var history_1 = __webpack_require__(27);
	var browserHistory = react_router_1.useRouterHistory(history_1.createHistory)({ basename: '/' });
	var RouterComp = function () { return (React.createElement(react_router_1.Router, {history: browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: todoApp_1.default}, React.createElement(react_router_1.IndexRoute, {component: todoApp_1.default}), React.createElement(react_router_1.Route, {path: "*", component: function () { return React.createElement("div", null, "404 not found"); }})))); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterComp;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(189);

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
	var ViewStore_1 = __webpack_require__(20);
	// var Router = require('react-router').Router;
	// 	var Route = require('react-router').Route;
	// 	var Link = require('react-router').Link;
	__webpack_require__(21);
	__webpack_require__(25);
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

	module.exports = (__webpack_require__(2))(91);

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

	module.exports = (__webpack_require__(2))(171);

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
	var axios = __webpack_require__(19);
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
	        var _this = this;
	        mobx_1.autorun(function () {
	            var todos = _this.toJS();
	            if (_this.subscribedServerToModel !== true) {
	                _this.subscribedServerToModel = true;
	                return;
	            }
	            axios.post('/api/todos', JSON.stringify({ todos: todos }), { headers: { 'Content-Type': 'application/json' } });
	            // fetch('/api/todos', {
	            //   method: 'post',
	            //   body: JSON.stringify({ todos }),
	            //   headers: new Headers({ 'Content-Type': 'application/json' })
	            // })
	        });
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

	module.exports = (__webpack_require__(2))(54);

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

	module.exports = (__webpack_require__(2))(130);

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(169);

/***/ }
]);
//# sourceMappingURL=app.map