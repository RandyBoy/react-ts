import * as React from 'react';
import {ListWbProps} from './list-wb-prop';
export default class CommentForm extends React.Component<{ myHeadImg: string, addComment: () => void }, {}> {
    context: {
        oneData: ListWbProps
    };
    static childContextTypes = {
        oneData: React.PropTypes.object.isRequired,
    }

    render() {
        console.log(this.context);
        var imgUrl = this.props.myHeadImg;
        return <div className="row comment-form clearfix" >
            <div className="ow-left">
                <img src={imgUrl} alt="头像" className="little-head" />
            </div>
            <div className="ow-right" >
                <textarea name="name" rows="8" cols="40" className="comment-box"></textarea>
                <input className="comment-btn" type="button" value="评论"  onClick ={this.props.addComment}/>
            </div>
        </div>
    }
}