import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import CommentBox from './components/comments/CommentBox';
import AppRouter from  './app.routers';
import GroceryList from './components/PhotoGallerys/GroceryList';
import UserGist from './components/user-gist/UserGist';
import ListWB from './components/wblist/list-wb';
import axios = require('axios');
import Parent from './components/extend/react-context';
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
        ReactDOM.render(<GroceryList items={['Apple', 'Banana', 'Cranberry']} />, document.getElementById('grocerylist'));
        ReactDOM.render(<UserGist source="https://api.github.com/users/octocat/gists"/>, document.getElementById('usergist'));

    })
    .catch((err) => { console.error("error") });

ReactDOM.render(<AppRouter/>, document.getElementById('todoapp'));

let dataList = [
    {
        headUrl: 'assets/img/12638218076582.jpg',
        nickName: 'summer',
        content: '一些美好的..',
        NoCollect: 132,
        NoForward: 202,
        NoComment: 142,
        NoPointGreat: 423,
        contentImgUrls: [
            "assets/img/12836676803394.jpg",
            "assets/img/12878226683223.jpg",
            "assets/img/12881713571501.jpg",
            "assets/img/12866953609188.jpg",
            "assets/img/12861946828667.jpg",
            "assets/img/12848193209875.jpg"
        ]
    },
    {
        headUrl: 'assets/img/12609793551649.jpg',
        nickName: 'cyan',
        content: '分享内容',
        NoCollect: 1032,
        NoForward: 2202,
        NoComment: 1342,
        NoPointGreat: 1423,
        contentImgUrls: [
            "assets/img/12803199708390.jpg",
            "assets/img/12806693126743.jpg"
        ]
    }
];
ReactDOM.render(<ListWB data={dataList} />,
    document.getElementById('place')
);

let myprops = { bar: "动态传递对象属性BAR到上下文", foo: "动态传递对象属性FOO到上下文", onedata: dataList[0] };
ReactDOM.render(<Parent {...myprops} />, document.getElementById('context'));  //InversifyJS



