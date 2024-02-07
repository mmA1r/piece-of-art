import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useNavigation, useLocation, useLoaderData } from 'react-router-dom';
import ImagesColumn from './ImagesColumn/ImagesColumn';

import './contentWrapper.scss';

export const ContentFallBack = () => {
    return (
        <div className='gallery-content__fallback'>
            loader...
        </div>
    );
}

export const ContentWrapper = () => {
    const params = useParams();
    const answer = useLoaderData();
    const navigation = useNavigation();
    const location = useLocation();
    const navigate = useNavigate();

    const [size, setsize] = useState(window.innerWidth);

    const columns: string[][] = [];

    var size1300 = 1300;
    var size968 = 968;
    var size640 = 640;

    // * send req out of params
    // * if there`s pack of images in answer then ok
    // otherwise navigate('/notFound');
    // * it should be happening inside "contentLoader" function
    // and "action" atribute of Route ??

    // * for images make flex layout depends on window size and images number
    // * for every image create component Content with image source as prop
    // * inside Content create img with propper source
    // * while it happening there should be skeleton for each image
    // * if all ok in loading image then send it to ImageStorage through mediator
    // and create <img> tag (and othe shit with img optimization)
    // otherwise set warning that something wrong happened

    //if (!mockedData[location.pathname.split('/')[2]]) {
    //    navigate('/notFound');
    //}

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [ size ]);


    const onResize = () => {
        const width = window.innerWidth
        if(
            ((size <= size1300 && width > size1300) || (size > size1300 && width <= size1300)) ||
            ((size <= size968 && width > size968) || (size > size968 && width <= size968)) ||
            ((size <= size640 && width > size640) || (size > size640 && width <= size640))
        ) {
            setsize(width);
        }
    };

    const mockedImages = [
        'purple', 'fool', 'violet', 'azula', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 
        'charm', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'humility', 'purple', 
        'dragon', 'purple', 'purple', 'purple', 'purple', 'purple'
    ];

    const distributeImages = (length: number) => {
        for (var i = 0; i < length; i++) {
            columns[i] = (mockedImages.filter((_, index) => index % length === length-(i+1)));
        }
    }

    const fillColumns = () => {
        const width = window.innerWidth
        if(width > size1300) { distributeImages(4); } 
        else if (width <= size1300 && width > size968) { distributeImages(3); }
        else if ( width <= size968 && width > size640) { distributeImages(2); }
        else if (width <= size640) { distributeImages(1); }
    }

    fillColumns();

    if (navigation.state === "loading") {
        return <ContentFallBack />
    }

    return (
        <div 
            className={`gallery__content-wrapper`}
        >
            {
                columns.map((column, index) => <ImagesColumn images={column} key={index}/>)
            }
        </div>
    );
}

export const contentLoader = async () => {
    // Simulate an API fetch request with a delay
    //await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating a 10-second delay
    
    // Simulated data fetch
    return { message: 'Data fetched successfully!' };
}