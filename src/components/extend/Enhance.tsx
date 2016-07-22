import * as React from "react";

export default ComposedComponent =>
    class extends React.Component<any, { data: any }> {
        constructor() {
            super();
            this.state = { data: null };
        }
        componentDidMount() {
            this.setState({ data: 'Hello' });
        }
        render() {
            return <ComposedComponent {...this.props} data={this.state.data} />;
        }
    };

export function withData(ComposedComponent, name) {
    return class Data extends React.Component<{}, {}> {
        state = { data: null };
        componentDidMount() {
            this.setState({ data: `Hello, ${name}!` });
        }
        render() {
            return <ComposedComponent {...this.props} data={this.state.data} />;
        }
    };
}
