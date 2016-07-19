import * as React from 'react';
import PhotoGallery from '../PhotoGallerys/PhotoGallery';

export default class CommentForm extends React.Component<any, any> {

    render() {
        return (
            <div className='photo-gallery'>
                <PhotoGallery />
            </div>
        )
    }
}