import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import CommentBox from './components/comments/CommentBox';
import AppRouter from  './app.routers';
import axios = require('axios');
//  import {TimerView, AppState} from './components/timeview/timerview';

//declare var require;
// import TimerView = require('./components/timeview/timerview');
// var tv: typeof TimerView = require('./components/timeview/timerview');



ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

setTimeout(() => {
    require.ensure(['test', './components/timeview'], (req) => { console.log('异步模板加载成功1.'); }, "timeview");
    //  require.ensure(['./components/pur'], (req) => { console.log('采购模块异步加载成功.'); });
    //list={saleState.list} compiler={saleState.compiler} framework={saleState.framework}
    // require.include("./components/sale");
    require.ensure(['./components/sale'], (req) => {
        let sale = require('./components/sale');
        let saleState = { list: [1, 2], compiler: "TypeScript", framework: "React" };
        ReactDOM.render(
            <sale.SaleComponent saleStore = {saleState} />,
            document.getElementById("example")
        );
        console.log('销售模块异步加载成功.');
    }, 'sale');

    // require.include("./components/pur");
    require.ensure(['./components/pur'], (req) => { }, 'pur');
    //  require(['./components/sale']);
}, 3000);

setTimeout(() => {
    //异步模块加载方式一
    // import TimerView = require('./components/timeview');
    // require(['./components/timeview'], (tv : typeof TimerView) => {
    //     const appState = new tv.AppState();
    //     ReactDOM.render(<tv.TimerView appState={appState} />, document.getElementById('root'));
    // });

    require.ensure(['test', './components/timeview'], (req) => {
        let showMsg = require('test');
        let tv = require('./components/timeview');
        const appState = new tv.AppState();
        ReactDOM.render(<tv.TimerView appState={appState} />, document.getElementById('root'));
        showMsg('异步模块加载完成B');
    }, "timeview");
}, 10000);

let data;
axios.get('/assets/testdata/testdata.json')
    .then(res => {
        data = res.data;
        let data2 = [
            { author: "Pete Hunt", text: "This is one comment" },
            { author: "Jordan Walke", text: "This is *another* comment" }
        ];
        ReactDOM.render(<CommentBox data = {data}/>, document.getElementById('comment'));
    })
    .catch((err) => { console.error("error") });

ReactDOM.render(<AppRouter/>, document.getElementById('todoapp'));

