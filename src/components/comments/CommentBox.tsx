import * as React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import axios = require('axios');

export interface CommentBoxProps { data: any }

export interface CommentBoxState { data: any }

export default class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
    constructor() {
        super();
        this.state = { data: [] };
    }
    componentDidMount() {
        axios.get('/assets/testdata/testdata.json')
            .then(res => this.setState({ data: res.data }))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}
