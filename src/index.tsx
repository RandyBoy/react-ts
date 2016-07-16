import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import AppRouter from  './app.routers';
import {TimerView, AppState} from './components/timeview/timerview';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));

ReactDOM.render(<AppRouter/>, document.getElementById('todoapp'));