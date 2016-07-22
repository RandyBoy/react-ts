import * as React from 'react';
import {ListWbProps} from './list-wb-prop';
import CommentForm from './comment-form';
import ContentImg from './content-img';
import axios = require('axios');

export default class OneWB extends React.Component<{ oneData: ListWbProps },
    { isComment?: boolean, isForward?: boolean, isCollect?: boolean, isPointGreat?: boolean }> {
    constructor(props, context: ListWbProps) {
        super(props, context);
        this.state = {
            isComment: false
        };
    }
    static childContextTypes = {
        oneData: React.PropTypes.object.isRequired,
    }

    getChildContext() {
        return this.props;
    }
    context: {
        oneData: ListWbProps
    }

    static contextTypes = {
        router: React.PropTypes.object
    };

    render() {
        let oneData = this.props.oneData;
        // axios.get(oneData.headUrl)
        // .then(res=>console.log(res.data));
        let commentForm;
        let contentImgs;
        if (this.state.isComment) {
            //控制评论框是否展现,因为是动态的，所以放在state而不是props
            commentForm = <CommentForm myHeadImg={oneData.headUrl} addComment ={() => { this.addComment() } }/>;
        }

        if (oneData.contentImgUrls) {
            //若后端给的数据中有图片url，则展示
            contentImgs = <ContentImg contentImageUrls={oneData.contentImgUrls} />
        }
        return <div className="big-center" >
            <div className="one-wb ">
                <div className="clearfix">
                    <div className="ow-left">
                        <img className="nick-img" src={oneData.headUrl}/>
                    </div>
                    <div className="ow-right">
                        <div className="ow-nick row">
                            <span>{oneData.nickName}</span>
                        </div>
                        <div className="ow-content row">{oneData.content}</div>
                        {contentImgs}
                    </div>
                </div>
                <div className="ow-footer row ">
                    <ul className="clearfix" onClick={this.handlerForwardClick.bind(this) }>
                        <li className="li-side-border"><span>收藏</span> {oneData.NoCollect}</li>
                        <li className="li-side-border"><span>转发</span> {oneData.NoForward}</li>
                        <li className="li-side-border"><span>评论</span> {oneData.NoComment}</li>
                        <li ><span>赞</span > {oneData.NoPointGreat}</li>
                    </ul>
                </div>
            </div>
            {commentForm}
        </div>;
    }
    handlerForwardClick(event: Event) {
        let innerText = (event.target as HTMLElement).innerText;
        if (innerText == '评论') {
            this.setState({ isComment: !this.state.isComment });
        } else if (innerText == '赞') {
            this.props.oneData.NoPointGreat += 1;
            this.forceUpdate();
        } else if (innerText == "转发") {
            this.props.oneData.NoForward += 1;
            this.forceUpdate();
        } else if (innerText == '收藏') {
            if (this.state.isCollect) {
                this.props.oneData.NoCollect += 1;
            } else {
                this.props.oneData.NoCollect -= 1;
            }
            this.setState({ isCollect: !this.state.isCollect });
        }
        else {
            this.setState({ isComment: false });
        }
    }
    addComment() {
        this.props.oneData.NoComment += 1;
        this.setState({ isComment: false });
    }
}