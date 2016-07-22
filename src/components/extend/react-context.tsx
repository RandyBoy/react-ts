import * as React from "react";
import {ListWbProps} from '../wblist/list-wb-prop';

interface Props {
    onedata: ListWbProps,
    foo: string;
    bar: string;
}

export default class Parent extends React.Component<Props, {}> {
    constructor(props: Props, context: any) {
        super(props, context);
    }

    static childContextTypes = {
        onedata: React.PropTypes.object.isRequired,
        foo: React.PropTypes.string.isRequired,
        bar: React.PropTypes.string.isRequired,
    }

    getChildContext() {
        return this.props;
    }

    render() {
        return <Child />
    }
}

class Child extends React.Component<{}, {}> {
    context: Props;

    static contextTypes = {
        onedata: React.PropTypes.object.isRequired,
        foo: React.PropTypes.string.isRequired,
        bar: React.PropTypes.string.isRequired
    }

    render() {
        return <div>Hello, {this.context.foo}, {this.context.bar}, {this.context.onedata.headUrl}</div>;
    }
}


// interface IRouter {
//     replaceWith(path: string);
// }

// interface IRouterContext {
//     router: IRouter;
// }

// interface ISomeOtherContext {
//     somethingElse: any;
// }

// export class MyComponent extends React.Component<any, any> {

//     context: IRouterContext & ISomeOtherContext;

//     static contextTypes = {
//         router: React.PropTypes.func.isRequired
//     }

//     onClick = () => {
//         this.context.router.replaceWith('/');
//     }

//     render() {
//         return <div onClick={this.onClick} />
//     }

// }

import { Router, IRouterContext } from './myRouter';

@Router
export class MyComponent extends React.Component<any, any> {

    context: IRouterContext;

    onClick = () => {
        this.context.router.replaceWith('/');
    }

    render() {
        return <div onClick={this.onClick} />
    }

}


