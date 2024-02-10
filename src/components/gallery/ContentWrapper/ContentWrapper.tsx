import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ImagesColumn from './ImagesColumn/ImagesColumn';

import './contentWrapper.scss';

export const ContentFallBack = () => {
    return (
        <div className='gallery-content__fallback'>
            <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
        </div>
    );
}

export const ContentWrapper = ({ images }: { images: { [key: string]: string[] } }) => {
    const year = useParams();
    const navigate = useNavigate();
    const [size, setSize] = useState(window.innerWidth);

    var content;

    useEffect(() => {
        const currentYear = new Date().getFullYear(); // to make it faster, possible path are alredy establised
        const posiblePaths = ['all'];                 // so there`s no need to wait server`s answer
        for (let year = 2019; year <= currentYear; year++) {
            posiblePaths.push(`${year}`);
        }
        if(!posiblePaths.includes(`${year.category}`)) {
            navigate('/notFound');
            return;
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [ size ]);
    
    const columns: string[][] = [];

    var size1300 = 1300;
    var size968 = 968;
    var size640 = 640;

    if (year.category) { // create columns from images or just paste fallback component
        if (images[year.category]) {
            fillColumns(images[year.category]);
        }
        content = columns.map((column, index) => <ImagesColumn images={column} key={index}/>);
    }

    function onResize() {
        const width = window.innerWidth
        if(
            ((size <= size1300 && width > size1300) || (size > size1300 && width <= size1300)) ||
            ((size <= size968 && width > size968) || (size > size968 && width <= size968)) ||
            ((size <= size640 && width > size640) || (size > size640 && width <= size640))
        ) {
            setSize(width);
        }
    };

    function fillColumns(images: string[]) {
        const width = window.innerWidth;
        const length = (
            (width > size1300) ? 4 :
            (width <= size1300 && width > size968) ? 3 :
            (width <= size968 && width > size640) ? 2 : 1
        );
        for (var i = 0; i < length; i++) {
            columns[i] = (images.filter((_, index) => index % length === length-(i+1)));
        }
    }

    return (
        <div 
            className={`gallery__content-wrapper`}
        >
            { content }
        </div>
    );
}