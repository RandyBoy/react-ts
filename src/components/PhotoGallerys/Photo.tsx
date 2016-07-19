import * as React from 'react';

export default class Photo extends React.Component<any, any> {

    constructor() {
        super();
        this.state = { liked: false };
    }

    toggleLiked() {
        this.setState({
            liked: !this.state.liked
        });
    }
    render() {
        let buttonClass = this.state.liked ? 'active' : '';
        return (
            <div className='photo'>
                <img src={this.props.src} />
                <div className='bar'>
                    <button onClick={this.toggleLiked} className={buttonClass}> ♥ </button>
                    <span>{this.props.caption}</span>
                </div>
            </div>
        );
    }
}