import * as React from "react";
import {Button} from 'antd';

export interface SaleProps { list: number[], compiler: string; framework: string; }

export class SaleComponent extends React.Component<{ saleStore: SaleProps }, {}> {
    list = [];
    constructor() {
        super();
    }
    render() {
        return <div>
            <Button onClick={this.onAdd} type="primary">插入组件</Button>
            {this.props.saleStore.list.map(todo =>
                <h1 key = {todo}>Sale from {this.props.saleStore.compiler} and {this.props.saleStore.framework}!</h1>
            ) }
        </div>
    }
    onAdd = () => {
        if (this.props) {
            this.props.saleStore.list.push(this.props.saleStore.list.length + 2);
            this.list.push(this.props.saleStore.list.length + 2);
        }
        // enum Color { Red = 1, Green = 2, Blue = 4 };
        // let c: Color = Color.Green;
        enum Color { Red = 2, Green, Blue };
        let c: Color = Color.Green;
        let c1: string = Color[2];
        let c2: number = Color.Green;
        c === c2 ? console.log('equal') : console.log('not equal');
        let x: [string, number, string];
        x = ["hello", 10, 'abc'];
        x[4] = "add";
        console.log(x[0]);
        console.log(x[4]);
        console.log(x[5]);
        console.log(this.list);
        this.forceUpdate();
    }
}