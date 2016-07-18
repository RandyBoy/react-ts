webpackJsonp([0,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(3);
	var Hello_1 = __webpack_require__(4);
	var app_routers_1 = __webpack_require__(5);
	//  import {TimerView, AppState} from './components/timeview/timerview';
	//declare var require;
	// import TimerView = require('./components/timeview/timerview');
	// var tv: typeof TimerView = require('./components/timeview/timerview');
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));
	setTimeout(function () {
	    __webpack_require__.e/* nsure */(1, function (req) { console.log('异步模板加载成功1.'); });
	    //  require.ensure(['./components/pur'], (req) => { console.log('采购模块异步加载成功.'); });
	    //list={saleState.list} compiler={saleState.compiler} framework={saleState.framework}
	    // require.include("./components/sale");
	    __webpack_require__.e/* nsure */(2, function (req) {
	        var sale = __webpack_require__(34);
	        var saleState = { list: [1, 2], compiler: "TypeScript", framework: "React" };
	        ReactDOM.render(React.createElement(sale.SaleComponent, {saleStore: saleState}), document.getElementById("example"));
	        console.log('销售模块异步加载成功.');
	    });
	    // require.include("./components/pur");
	    __webpack_require__.e/* nsure */(3, function (req) { });
	    //  require(['./components/sale']);
	}, 3000);
	setTimeout(function () {
	    //异步模块加载方式一
	    // import TimerView = require('./components/timeview');
	    // require(['./components/timeview'], (tv : typeof TimerView) => {
	    //     const appState = new tv.AppState();
	    //     ReactDOM.render(<tv.TimerView appState={appState} />, document.getElementById('root'));
	    // });
	    __webpack_require__.e/* nsure */(1, function (req) {
	        var showMsg = __webpack_require__(30);
	        var tv = __webpack_require__(31);
	        var appState = new tv.AppState();
	        ReactDOM.render(React.createElement(tv.TimerView, {appState: appState}), document.getElementById('root'));
	        showMsg('异步模块加载完成B');
	    });
	}, 10000);
	ReactDOM.render(React.createElement(app_routers_1.default, null), document.getElementById('todoapp'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(8);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_dll_f715e4f5e65b81a62be6;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(58);

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
	var history_1 = __webpack_require__(29);
	var browserHistory = react_router_1.useRouterHistory(history_1.createHistory)({ basename: '/' });
	var RouterComp = function () { return (React.createElement(react_router_1.Router, {history: browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: todoApp_1.default}, React.createElement(react_router_1.IndexRoute, {component: todoApp_1.default}), React.createElement(react_router_1.Route, {path: "*", component: function () { return React.createElement("div", null, "404 not found"); }})))); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterComp;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(204);

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
	var TodoStore_1 = __webpack_require__(17);
	var ViewStore_1 = __webpack_require__(20);
	// var Router = require('react-router').Router;
	// 	var Route = require('react-router').Route;
	// 	var Link = require('react-router').Link;
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(27);
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

	module.exports = (__webpack_require__(2))(187);

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

	!function(e,t){ true?module.exports=t(__webpack_require__(1),__webpack_require__(16),__webpack_require__(8)):"function"==typeof define&&define.amd?define(["react","mobx","mobx-react"],t):"object"==typeof exports?exports.mobxDevtools=t(require("react"),require("mobx"),require("mobx-react")):e.mobxDevtools=t(e.React,e.mobx,e.mobxReact)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.UpdatesControl=t.LogControl=t.GraphControl=t["default"]=void 0;var r=n(1);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r)["default"]}});var i=n(9);Object.defineProperty(t,"GraphControl",{enumerable:!0,get:function(){return o(i)["default"]}});var a=n(10);Object.defineProperty(t,"LogControl",{enumerable:!0,get:function(){return o(a)["default"]}});var u=n(12);Object.defineProperty(t,"UpdatesControl",{enumerable:!0,get:function(){return o(u)["default"]}});var l=n(28),s=o(l);s["default"].polyfill()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(3),d=n(8),p=o(d),f=n(22),g=o(f),h=n(24),b=o(h),y=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState((0,c.getGlobalState)())},o.handleToggleGraph=function(){o.setState({hoverBoxes:[],graphEnabled:!o.state.graphEnabled})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){this.setState((0,c.getGlobalState)())}},{key:"componentDidMount",value:function(){c.eventEmitter.on("update",this.handleUpdate),setTimeout(c.restoreState,0)}},{key:"componentWillUnmount",value:function(){c.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props.noPanel,t=this.state,n=t.renderingBoxes,o=t.hoverBoxes;return s["default"].createElement("div",null,e!==!0&&s["default"].createElement(p["default"],{position:this.props.position}),s["default"].createElement(g["default"],{boxes:n.concat(o)}),s["default"].createElement(b["default"],null))}}]),t}(l.Component);y.propTypes={hightlightTimeout:l.PropTypes.number,position:l.PropTypes.object,userAgent:l.PropTypes.string,noPanel:l.PropTypes.bool},y.defaultProps={noPanel:!1},t["default"]=y},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t._handleClick=t._handleMouseMove=t.restoreState=t.getGlobalState=t.setGlobalState=t.eventEmitter=void 0;var r=n(4),i=o(r),a=n(5),u=o(a),l=n(6),s=o(l),c=n(7),d=o(c),p="mobx-react-devtool__updatesEnabled",f="mobx-react-devtool__logEnabled",g={updatesEnabled:!1,graphEnabled:!1,logEnabled:!1,hoverBoxes:[],renderingBoxes:[]},h=t.eventEmitter=new s["default"],b=t.setGlobalState=function(e){g=Object.assign({},g,e),"undefined"!=typeof window&&window.localStorage&&(g.updatesEnabled?window.localStorage.setItem(p,"YES"):window.localStorage.removeItem(p),g.logEnabled?window.localStorage.setItem(f,"YES"):window.localStorage.removeItem(f)),h.emit("update")},y=(t.getGlobalState=function(){return g},t.restoreState=function(){if("undefined"!=typeof window&&window.localStorage){var e="YES"===window.localStorage.getItem(p),t="YES"===window.localStorage.getItem(f);b({updatesEnabled:e,logEnabled:t})}},function(e){for(var t=e,n=void 0;t;){if(n=u["default"].componentByNodeRegistery.get(t))return{component:n,node:t};t=t.parentNode}return{component:void 0,node:void 0}});t._handleMouseMove=function(e){if(g.graphEnabled){var t=e.target,n=y(t).node;if(n){var o=n.getBoundingClientRect();b({hoverBoxes:[{id:"the hovered node",type:"hover",x:o.left,y:o.top,width:o.width,height:o.height,lifeTime:1/0}]})}}},t._handleClick=function(e){if(g.graphEnabled){var t=e.target,n=y(t).component;if(n){e.stopPropagation(),e.preventDefault();var o=i["default"].extras.getDependencyTree(n.render.$mobx);(0,d["default"])(o),b({dependencyTree:o,hoverBoxes:[],graphEnabled:!1})}}}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,u,l,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(i(n))for(u=Array.prototype.slice.call(arguments,1),s=n.slice(),r=s.length,l=0;l<r;l++)s[l].apply(this,u);return!0},n.prototype.addListener=function(e,t){var r;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,a,u;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(u=a;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e){if(e.dependencies){for(var t=e.dependencies.length-1;t>=0;t--)for(var n=e.dependencies[t].name,r=t-1;r>=0;r--)if(e.dependencies[r].name===n){e.dependencies[r].dependencies=[].concat(e.dependencies[r].dependencies||[],e.dependencies[t].dependencies||[]),e.dependencies.splice(t,1);break}e.dependencies.forEach(o)}};t["default"]=n},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(3),p=n(9),f=r(p),g=n(10),h=r(g),b=n(12),y=r(b),v=n(14),m=r(v),I=n(15),w=o(I),x=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},r=n,a(o,r)}return u(t,e),l(t,[{key:"componentDidMount",value:function(){d.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){d.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.hightlightTimeout,o={};return t?(o.top=t.top,o.right=t.right,o.bottom=t.bottom,o.left=t.left):(o.top="0px",o.right="20px"),c["default"].createElement("div",null,c["default"].createElement("div",{style:Object.assign({},w.panel,o)},c["default"].createElement(y["default"],{hightlightTimeout:n},c["default"].createElement(m["default"],{id:"buttonUpdates"})),c["default"].createElement(f["default"],null,c["default"].createElement(m["default"],{id:"buttonGraph"})),c["default"].createElement(h["default"],null,c["default"].createElement(m["default"],{id:"buttonLog"}))))}}]),t}(s.Component);x.propTypes={hightlightTimeout:s.PropTypes.number},t["default"]=x},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(5),d=o(c),p=n(3),f=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},o.handleToggleGraph=function(){var e=(0,p.getGlobalState)(),t=e.graphEnabled;(0,p.setGlobalState)({hoverBoxes:[],graphEnabled:!t})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"componentDidMount",value:function(){d["default"].trackComponents(),p.eventEmitter.on("update",this.handleUpdate),"undefined"!=typeof window&&"undefined"!=typeof document&&(document.body.addEventListener("mousemove",p._handleMouseMove,!0),document.body.addEventListener("click",p._handleClick,!0))}},{key:"componentWillUnmount",value:function(){p.eventEmitter.removeListener("update",this.handleUpdate),"undefined"!=typeof document&&(document.body.removeEventListener("mousemove",p._handleMouseMove,!0),document.body.removeEventListener("click",p._handleMouseMove,!0))}},{key:"render",value:function(){var e=(0,p.getGlobalState)(),t=e.graphEnabled,n=this.props.children;return s["default"].cloneElement(n,{onToggle:this.handleToggleGraph,active:t})}}]),t}(l.Component);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(11),d=n(3),p=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){o.setState({});var e=(0,d.getGlobalState)(),t=e.logEnabled;(0,c.setLogLevel)(t)},o.handleToggleLog=function(){var e=(0,d.getGlobalState)(),t=e.logEnabled;(0,d.setGlobalState)({logEnabled:!t})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){d.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){d.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=(0,d.getGlobalState)(),t=e.logEnabled,n=this.props.children;return s["default"].cloneElement(n,{onToggle:this.handleToggleLog,active:t})}}]),t}(l.Component);t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){e!==!0||I?e===!1&&I&&(I(),I=null):("undefined"!=typeof navigator&&navigator.userAgent.indexOf("Chrome")===-1&&console.warn("The output of the MobX logger is optimized for Chrome"),I=m["default"].spy(i))}function i(e){if(e.spyReportEnd===!0)"number"==typeof e.time&&l("%ctotal time: %sms","color:gray",e.time),console.groupEnd();else{var t=e.spyReportStart===!0?a:l;switch(e.type){case"action":t("%caction '%s' %s","color:dodgerblue",e.name,p("(",h(e.target))),l(e.arguments),c();break;case"transaction":t("%ctransaction '%s' %s","color:gray",e.name,p("(",h(e.target)));break;case"scheduled-reaction":t("%cscheduled async reaction '%s'","color:#10a210",f(e.object));break;case"reaction":t("%creaction '%s'","color:#10a210",f(e.object)),c();break;case"compute":a("%ccomputed '%s' %s","color:#10a210",f(e.object),p("(",h(e.target))),u();break;case"error":t("%cerror: %s","color:tomato",e.message),c(),d();break;case"update":m["default"].isObservableArray(e.object)?t("updated '%s[%s]': %s (was: %s)",f(e.object),e.index,g(e.newValue),g(e.oldValue)):m["default"].isObservableObject(e.object)?t("updated '%s.%s': %s (was: %s)",f(e.object),e.name,g(e.newValue),g(e.oldValue)):t("updated '%s': %s (was: %s)",f(e.object),e.name,g(e.newValue),g(e.oldValue)),s({newValue:e.newValue,oldValue:e.oldValue}),c();break;case"splice":t("spliced '%s': index %d, added %d, removed %d",f(e.object),e.index,e.addedCount,e.removedCount),s({added:e.added,removed:e.removed}),c();break;case"add":t("set '%s.%s': %s",f(e.object),e.name,g(e.newValue)),s({newValue:e.newValue}),c();break;case"delete":t("removed '%s.%s' (was %s)",f(e.object),e.name,g(e.oldValue)),s({oldValue:e.oldValue}),c();break;case"create":t("set '%s': %s",f(e.object),g(e.newValue)),s({newValue:e.newValue}),c();break;default:t(e.type),s(e)}}}function a(){console[w?"groupCollapsed":"log"].apply(console,arguments),x++}function u(){x--,w&&console.groupEnd()}function l(){console.log.apply(console,arguments)}function s(){console.dir.apply(console,arguments)}function c(){console.trace("stack")}function d(){for(var e=0,t=x;e<t;e++)u()}function p(e,t){return t?(e||"")+t+(j[e]||""):""}function f(e){return m["default"].extras.getDebugName(e)}function g(e){return b(e)?"string"==typeof e&&e.length>100?e.substr(0,97)+"...":e:p("(",h(e))}function h(e){if(null===e||void 0===e)return"";if(e&&"object"===("undefined"==typeof e?"undefined":y(e))){if(e&&e.$mobx)return e.$mobx.name;if(e.constructor)return e.constructor.name||"object"}return""+("undefined"==typeof e?"undefined":y(e))}function b(e){return null===e||void 0===e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e}Object.defineProperty(t,"__esModule",{value:!0});var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.setLogLevel=r;var v=n(4),m=o(v),I=null,w="function"==typeof console.groupCollapsed,x=0,j={'"':'"',"'":"'","(":")","[":"]","<":"]","#":""}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),s=o(l),c=n(13),d=o(c),p=n(3),f=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},o.handleToggleUpdates=function(){var e=(0,p.getGlobalState)(),t=e.updatesEnabled;(0,p.setGlobalState)({updatesEnabled:!t})},a=n,i(o,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){p.eventEmitter.on("update",this.handleUpdate);var e=this.props.hightlightTimeout;this.renderingMonitor=new d["default"]({hightlightTimeout:e})}},{key:"componentWillUnmount",value:function(){p.eventEmitter.removeListener("update",this.handleUpdate),this.renderingMonitor.dispose()}},{key:"render",value:function(){var e=(0,p.getGlobalState)(),t=e.updatesEnabled,n=this.props.children;return s["default"].cloneElement(n,{onToggle:this.handleToggleUpdates,active:t})}}]),t}(l.Component);f.propTypes={hightlightTimeout:l.PropTypes.number},f.defaultProps={hightlightTimeout:1500},t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(5),u=o(a),l=n(3),s=function(e){switch(!0){case e<25:return"cheap";case e<100:return"acceptable";default:return"expensive"}},c=function(){function e(t){var n=this,o=t.hightlightTimeout;r(this,e),this._boxesRegistry="undefined"!=typeof WeakMap?new WeakMap:new Map,this._renderReporterDisposer=u["default"].renderReporter.on(function(e){if((0,l.getGlobalState)().updatesEnabled===!0)switch(e.event){case"render":if(!e.node)return;var t=e.node.getBoundingClientRect(),r=n.getBoxForNode(e.node);r.type="rendering",r.y=t.top,r.x=t.left,r.width=t.width,r.height=t.height,r.renderInfo={count:r.renderInfo&&++r.renderInfo.count||1,renderTime:e.renderTime,totalTime:e.totalTime,cost:s(e.renderTime)},r.lifeTime=o;var i=(0,l.getGlobalState)().renderingBoxes;return i.indexOf(r)===-1&&(i=i.concat([r])),(0,l.setGlobalState)({renderingBoxes:i}),r._timeout&&clearTimeout(r._timeout),void(r._timeout=setTimeout(function(){return n.removeBox(e.node,!0)},o));case"destroy":return n.removeBox(e.node),void n._boxesRegistry["delete"](e.node);default:return}})}return i(e,[{key:"getBoxForNode",value:function(e){if(this._boxesRegistry.has(e))return this._boxesRegistry.get(e);var t={id:Math.random().toString(32).substr(2)};return this._boxesRegistry.set(e,t),t}},{key:"dispose",value:function(){this._renderReporterDisposer()}},{key:"removeBox",value:function(e){if(this._boxesRegistry.has(e)!==!1){var t=(0,l.getGlobalState)().renderingBoxes,n=t.indexOf(this._boxesRegistry.get(e));n!==-1&&(t=t.slice(0,n).concat(t.slice(n+1)),(0,l.setGlobalState)({renderingBoxes:t}))}}}]),e}();t["default"]=c},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(15),p=o(d),f=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={hovered:!1},o.handleMouseOver=function(){return o.setState({hovered:!0})},o.handleMouseOut=function(){return o.setState({hovered:!1})},r=n,a(o,r)}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.id,o=e.onToggle,r=this.state.hovered,i=function(){switch(n){case"buttonUpdates":return t?p.buttonUpdatesActive:p.buttonUpdates;case"buttonGraph":return t?p.buttonGraphActive:p.buttonGraph;case"buttonLog":return t?p.buttonLogActive:p.buttonLog}}(),a=function(){switch(n){case"buttonUpdates":return"Visualize component re-renders";case"buttonGraph":return"Select a component and show it's dependency tree";case"buttonLog":return"Log all MobX state changes and reactions to the browser console (use F12 to show / hide the console). Use Chrome / Chromium for an optimal experience"}}(),u=Object.assign({},p.button,i,t&&p.button.active,r&&p.button.hover);return c["default"].createElement("button",{onClick:o,title:a,style:u,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut})}}]),t}(s.Component);f.props={onToggle:s.PropTypes.bool.isRequired,active:s.PropTypes.bool.isRequired,name:s.PropTypes.oneOf(["buttonUpdates","buttonGraph","buttonLog"]).isRequired},t["default"]=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.panel={position:"fixed",height:"26px",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.8)",borderRadius:"0 0 2px 2px",borderStyle:"solid",borderWidth:"0 1px 1px",borderColor:"rgba(0, 0, 0, 0.1)",zIndex:"65000",fontFamily:"Helvetica, sans-serif",display:"flex",padding:"0 5px"},t.button={opacity:.45,background:"transparent none center / 16px 16px no-repeat",width:"26px",margin:"0 10px",cursor:"pointer",border:"none",hover:{opacity:.7},active:{opacity:1,":hover":{opacity:1}}},t.buttonLog={backgroundImage:"url("+n(16)+")"},t.buttonLogActive={backgroundImage:"url("+n(17)+")"},t.buttonUpdates={backgroundImage:"url("+n(18)+")"},t.buttonUpdatesActive={backgroundImage:"url("+n(19)+")"},t.buttonGraph={backgroundImage:"url("+n(20)+")"},t.buttonGraphActive={backgroundImage:"url("+n(21)+")"}},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0xMi41IDMuNWgtOGMtMS4xIDAtMiAuOS0yIDJ2NWMwIDEuMS45IDIgMiAyaDF2Mmw1LTJoMmMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnoiLz4KICAgICAgICA8cGF0aCBkPSJNNSA2LjVoNyIvPgogICAgICAgIDxwYXRoIGQ9Ik01IDkuNWg3Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij4KICAgIDxnIHN0cm9rZT0iIzE3ODBmYSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ij4KICAgICAgICA8cGF0aCBkPSJNMTIuNSAzLjVoLThjLTEuMSAwLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxdjJsNS0yaDJjMS4xIDAgMi0uOSAyLTJ2LTVjMC0xLjEtLjktMi0yLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTUgNi41aDciLz4KICAgICAgICA8cGF0aCBkPSJNNSA5LjVoNyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMDAwIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMTc4MGZhIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(23),p=o(d),f=function(e){function t(){return i(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"componentWillAppear",value:function(e){this.props.willAppear(e)}},{key:"componentWillLeave",value:function(){this.props.willLeave()}},{key:"render",value:function(){return this.props.children}}]),t}(s.Component);f.propTypes={willAppear:s.PropTypes["function"],willLeave:s.PropTypes["function"]},f.defaultProps={willAppear:function(){},willLeave:function(){}};var g=function(e){function t(){return i(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"renderBox",value:function(e){switch(e.type){case"rendering":var t=p.rendering[e.renderInfo.cost]||{};return c["default"].createElement("div",{key:e.id,ref:function(t){return setTimeout(function(){t&&(t.style.opacity=0)},e.lifeTime-500)},style:Object.assign({},p.box,p.rendering,t,{left:e.x,top:e.y,width:e.width,height:e.height})},c["default"].createElement("span",{style:Object.assign({},p.text,t.text)},e.renderInfo.count,"x | ",e.renderInfo.renderTime," / ",e.renderInfo.totalTime," ms"));case"hover":return c["default"].createElement("div",{key:e.id,style:Object.assign({},p.box,p.hover,{
	left:e.x,top:e.y,width:e.width,height:e.height})});default:throw new Error}}},{key:"render",value:function(){var e=this,t=this.props.boxes;return c["default"].createElement("div",null,t.map(function(t){return e.renderBox(t)}))}}]),t}(s.Component);g.propTypes={boxes:s.PropTypes.arrayOf(s.PropTypes.shape({type:s.PropTypes.oneOf(["rendering","hover"]).isRequired,x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired,width:s.PropTypes.number.isRequired,height:s.PropTypes.number.isRequired,renderInfo:s.PropTypes.shape({count:s.PropTypes.number.isRequired,renderTime:s.PropTypes.number.isRequired,totalTime:s.PropTypes.number.isRequired,cost:s.PropTypes.oneOf(["cheap","acceptable","expensive"]).isRequired}),lifeTime:s.PropTypes.number.isRequired})).isRequired},t["default"]=g},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.box={display:"block",position:"fixed",zIndex:"64998",minWidth:"60px",outline:"3px solid",pointerEvents:"none",transition:"opacity 500ms ease-in"},t.text={fontFamily:"verdana, sans-serif",padding:"0 4px 2px",color:"rgba(0, 0, 0, 0.6)",fontSize:"10px",lineHeight:"12px",pointerEvents:"none","float":"right",borderBottomRightRadius:"2px",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},t.rendering={cheap:{outlineColor:"rgba(182, 218, 146, 0.75)",text:{backgroundColor:"rgba(182, 218, 146, 0.75)"}},acceptable:{outlineColor:"rgba(228, 195, 66, 0.85)",text:{backgroundColor:"rgba(228, 195, 66, 0.85)"}},expensive:{outlineColor:"rgba(228, 171, 171, 0.95)",text:{backgroundColor:"rgba(228, 171, 171, 0.95)"}}},t.hover={outlineColor:"rgba(128, 128, 255, 0.5)"}},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(25),p=r(d),f=n(3),g=n(27),h=o(g),b=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleUpdate=function(){return o.setState({})},o.handleClose=function(){return(0,f.setGlobalState)({dependencyTree:void 0})},r=n,a(o,r)}return u(t,e),l(t,[{key:"componentDidMount",value:function(){f.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){f.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"renderTreeItem",value:function(e,t,n){var o=e.name,r=e.dependencies,i=this;return c["default"].createElement("div",{style:h.item,key:o},c["default"].createElement("span",{style:Object.assign({},h.box,n&&h.box.root)},o),r&&c["default"].createElement("div",{style:h.tree},r.map(function(e,t){return i.renderTreeItem(e,t==r.length-1)})),!n&&c["default"].createElement("span",{style:h.itemHorisontalDash}),!n&&c["default"].createElement("span",{style:Object.assign({},h.itemVericalStick,t&&h.itemVericalStick["short"])}))}},{key:"render",value:function(){var e=(0,f.getGlobalState)(),t=e.dependencyTree;return c["default"].createElement(p["default"],{onOverlayClick:this.handleClose},t&&c["default"].createElement("div",{style:h.graph},c["default"].createElement("span",{style:h.close,onClick:this.handleClose},"×"),c["default"].createElement("div",{style:h.tree},this.renderTreeItem(t,!0,!0))))}}]),t}(s.Component);t["default"]=b},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=r(s),d=n(26),p=o(d),f=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.stopPropogation=function(e){return e.stopPropagation()},r=n,a(o,r)}return u(t,e),l(t,[{key:"componentDidUpdate",value:function(e){var t=document.body.parentNode;if(e.children&&!this.props.children)this.rightOffset=0,t.style.borderRight=null,t.style.overflow=null;else if(!e.children&&this.props.children){var n=t.offsetWidth;t.style.overflow="hidden";var o=t.offsetWidth,r=Math.max(0,o-n);t.style.borderRight=r+"px solid transparent"}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onOverlayClick;return t?c["default"].createElement("div",{style:p.overlay,onClick:n},c["default"].createElement("div",{key:"content",style:p.modal,onClick:this.stopPropogation},t)):null}}]),t}(s.Component);f.propTypes={children:s.PropTypes.node,onOverlayClick:s.PropTypes.func.isRequired},t["default"]=f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.overlay={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:66e3,overflow:"auto",WebkitOverflowScrolling:"touch",outline:0,backgroundColor:"rgba(40, 40, 50, 0.5)",transformOrigin:"50% 25%"},t.modal={position:"relative",width:"auto",margin:"5% 10%",zIndex:1060}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.graph={background:"white",padding:"40px"},t.close={color:"rgba(0, 0, 0, 0.2)",fontSize:"36px",position:"absolute",top:"5px",right:"5px",width:"40px",height:"40px",lineHeight:"34px",textAlign:"center",cursor:"pointer",":hover":{color:"rgba(0, 0, 0, 0.5)"}},t.tree={position:"relative",paddingLeft:"25px"},t.item={position:"relative"},t.box={padding:"4px 10px",background:"rgba(0, 0, 0, 0.05)",display:"inline-block",marginBottom:"8px",root:{fontSize:"15px",fontWeight:"bold",padding:"6px 13px"}},t.itemHorisontalDash={position:"absolute",left:"-12px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",top:"14px",width:"12px",height:"0"},t.itemVericalStick={position:"absolute",left:"-12px",borderLeft:"1px solid rgba(0, 0, 0, 0.2)",height:"100%",width:0,top:"-8px","short":{height:"23px"}}},function(e,t){"use strict";function n(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,u=i.length;a<u;a++){var l=i[a],s=Object.getOwnPropertyDescriptor(r,l);void 0!==s&&s.enumerable&&(n[l]=r[l])}}return n}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:n})}e.exports={assign:n,polyfill:o}}])});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(100);

/***/ },
/* 17 */
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
	var mobx_1 = __webpack_require__(16);
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
	var mobx_1 = __webpack_require__(16);
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

	module.exports = (__webpack_require__(2))(139);

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
	var mobx_1 = __webpack_require__(16);
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(180);

/***/ }
]);
//# sourceMappingURL=../../chunks/app/app.map