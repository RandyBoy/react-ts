import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Button} from 'antd';

class AppState {

    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}

@observer
class TimerView extends React.Component<{ appState: AppState }, {}> {
    render() {
        return (
            <div>
                <Button onClick={this.onReset} type="primary">
                    Seconds passed: {this.props.appState.timer}
                </Button>
                // <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
        // require.ensure(['test', './'], (req) => {
        let showMsg = require('test');
        // let tv = require('./');
        const appState = new AppState();
        ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
        showMsg('异步模块加载完成B');
        this.forceUpdate();
        // });
    }
};

export {TimerView, AppState};

exports.TimerView = TimerView;
// exports.AppState = AppState;
module.exports = { TimerView, AppState };