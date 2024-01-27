import { useState, useEffect } from 'react';
import ImageStorage from '../../../../services/ImageStorage/ImageStorage';

import './content.scss';

const Content = ({ year, storage }: { year: string, storage: ImageStorage }) => {
    const [images, setImages] = useState<any>(null); // change any type

    const mediator = storage.mediator;

    const onLoadImagesEvent = mediator.getEventNames().CONTENT_LOADED;

    useEffect(() => {
        checkStorage(true);
        mediator.subscribe(onLoadImagesEvent, () => checkStorage(false));

        return () => {
            mediator.unsubscribe(onLoadImagesEvent, () => checkStorage(false));
        }
    }, []);

    const checkStorage = (isFirstCall: boolean) => {
        const storageImages = storage.images[year];
        if (storageImages) {
            setImages(storageImages);
        } else if (isFirstCall) {
            storage.getImages(year);
        }
    }

    const mockedImages = [
        'purple', 'purple', 'purple', 'azula', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 
        'charm', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'humility', 'purple', 
        'dragon', 'purple', 'purple', 'purple', 'purple', 'purple'
    ];

    return (
        <div className={`gallery__content`}>
            { mockedImages.map((str, index) => <div className='gallery__image-wrapper' key={index}><img className='gallery__image' src={`/assets/waterfall/avif/${str}.avif`}></img></div>) }
        </div>
    );
}

export default Content;