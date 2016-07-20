import * as React from 'react';
import Photo from './Photo';
import {uuid} from '../../components/todo/utils';
import {Observable} from 'rxjs';

export default class PhotoGallery extends React.Component<any, any> {
    getDataFromServer() {
        return Observable.of(
            {
                url: 'http://owenyang0.github.io/images/mocha.png',
                caption: 'Mocha'
            },
            {
                url: 'http://owenyang0.github.io/images/catalog.png',
                caption: 'Catelog'
            });
    }

    render() {
        // Observable.of([1, 2, 3]).map(value => value).subscribe(res => { console.log(res); });
        let photos;
        let data = this.getDataFromServer()
            .map(photo => {
                return <Photo key ={ uuid() } src={photo.url} onclick={this.onclickHandler} caption={photo.caption} />
            })
            .toArray()
            .subscribe(res => {
                photos = res;
            });
        // let photos = data.map((photo) => {
        //     return <Photo key ={ uuid() } src={photo.url} caption={photo.caption} />
        // });

        return (
            <div className='photo-gallery'>
                {photos}
            </div>
        )
    }

    onclickHandler = (event) => {
        console.log(event);
    }
}