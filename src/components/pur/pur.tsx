import * as React from "react";

export interface PurProps { compiler: string; framework: string; }

export class PurComponent extends React.Component<PurProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}