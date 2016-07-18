import * as React from "react";

export interface SaleProps { list: number[], compiler: string; framework: string; }

export class SaleComponent extends React.Component<{ saleStore: SaleProps }, {}> {
    list = [];
    constructor() {
        super();
    }
    render() {
        return <div>
            <button onClick={this.onAdd}> 新增行</button>
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
        console.log(this.list);
        this.forceUpdate();
    }
}