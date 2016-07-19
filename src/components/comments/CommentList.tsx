import * as React from 'react';
import Comment from './comment';
import {uuid} from '../../components/todo/utils';

export interface CommentListProps { data: any }

export default class CommentList extends React.Component<CommentListProps, any> {
    render() {
        console.log(this.props.data);
        let commentNodes = this.props.data.map((comment) => {
            return (
                <Comment key ={uuid() } author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}