import * as React from 'react';
import axios = require('axios');
import Todos from './todos';

export default class UserGist extends React.Component<{ source: string }, { username: string, lastGistUrl: string }> {
    /**
     *
     */
    constructor() {
        super();
        this.state = {
            username: '',
            lastGistUrl: ''
        };

    }
    componentDidMount() {
        axios.get(this.props.source)
            .then((result) => {
                let lastGist = result.data[0];
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
                <div>
                    <Todos source = 'myTodos' />
                </div>
            </div>
        );
    }
}