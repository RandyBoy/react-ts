import * as React from 'react';

export default class Todo extends React.Component<{ title: string, onClick: (title: string) => void }, {}> {
    render() {
        return <div onClick={this.props.onClick}>{this.props.title}</div>;
    }
    //this component will be accessed by the parent through the `ref` attribute
    animate() {
        console.log('Pretend %s is animating', this.props.title);
    }
}