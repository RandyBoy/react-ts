import * as React from 'react';
import Photo from './Photo';
import {uuid} from '../../components/todo/utils';

export default class PhotoGallery extends React.Component<any, any> {
    getDataFromServer() {
        return ([
            {
                url: 'http://owenyang0.github.io/images/mocha.png',
                caption: 'Mocha'
            },
            {
                url: 'http://owenyang0.github.io/images/catalog.png',
                caption: 'Catelog'
            }]);
    }

    render() {
        // let photos;
        let data = this.getDataFromServer();
        //     .map(photo => {
        //         return <Photo key ={ uuid() } src={photo.url} caption={photo.caption} />
        //     }).subscribe(res => photos = res);
        let photos = data.map((photo) => {
            return <Photo key ={ uuid() } src={photo.url} caption={photo.caption} />
        });

        return (
            <div className='photo-gallery'>
                {photos}
            </div>
        )
    }
}