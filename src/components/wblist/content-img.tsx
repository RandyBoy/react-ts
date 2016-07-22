import * as React from 'react';

export default class ContentImg extends React.Component<{ contentImageUrls: string[] }, {}> {
    render() {
        let imgNodes = this.props.contentImageUrls.map((oneImg, index) => {
            return <li  key={index} ><img src={oneImg} alt="微博配图" /></li>;
        });
        return <div  className="row extra-content clearfix">
            <ul>
                {imgNodes}
            </ul>
        </div>
    }
}