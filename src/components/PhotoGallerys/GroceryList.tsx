import * as React from 'react';

export default class GroceryList extends React.Component<{ items: string[] }, any> {

    constructor() {
        super();
        this.state = { windowWidth: window.innerWidth };
    }
    handleClick = (event, i) => {
        console.log('You clicked: ' + this.props.items[i]);
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div>
                <div>Current window width: {this.state.windowWidth}</div>
                {
                    this.props.items.map((item, i) => {
                        return (<div onClick={ (e) => this.handleClick(e, i) } key= { i } > { item }</div>);
                    }, this)
                }
            </div>
        );
    }
}