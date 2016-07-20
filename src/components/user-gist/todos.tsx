import * as React from 'react';
import Todo from './todo';

export default class Todos extends React.Component<{ source: string }, { items: string[] }> {

    constructor(props: { source: string }) {
        super(props);
        this.state = { items: ['Apple', 'Banana', 'Cranberry', 'Apple1', 'Banana2', 'Cranberry3'] };
    }

    handleClick = (index) => {
        let items = this.state.items.filter((item, i) => {
            return index !== i;
        });
        this.setState({ items: items }, () => {
            if (items.length === 1) {
                let item = this.refs["item0"] as Todo;
                item.animate();
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map((item, i) => {
                    let boundClick = this.handleClick.bind(this, i);
                    return (
                        <Todo onClick={() => this.handleClick(i) } key={i} title={item} ref={'item' + i} />
                    );
                }, this) }
            </div>
        );
    }
}