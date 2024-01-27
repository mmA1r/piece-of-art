import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './navigationElement.scss';

const BackgroundImage = ({ src, index }: { src: string, index: number }) => {
    const ref = useRef<HTMLImageElement>(null);

    const onError = () => {
        if (ref.current) {
            ref.current.style.display = 'none'
        }
    }

    return (
        <img
            className={`navigation__background-image background-image__element_${index}`}
            src={`/assets/waterfall/jpg/${src}.jpg`}
            ref={ref}
            onError={onError}
            loading='lazy'
        />
    );
}

const NavigationElement = ({ year, images }: { year: string, images: string[] }) => {
    var adiitionalName: string = '';

    const background = images.map((image, index) => 
        <BackgroundImage 
            src={image} 
            key={index} 
            index={index}
        />
    );

    if (!images.length) { adiitionalName = 'all-element'; }

    return(
        <li className='navigation__element'>
            <Link
                to={`/gallery/${year}`}
                className={`navigation__link ${adiitionalName}`}
            >
                <span className='navigation__year'>{ year }</span>
                <div className='navigation__background-wrapper'>
                    { background }
                </div>
            </Link>
        </li>
    );
}

export default NavigationElement;