import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './navigationElement.scss';

const BackgroundImage = ({ src, index, additionalClass }: { src: string, index: number, additionalClass:string }) => {
    const ref = useRef<HTMLImageElement>(null);

    const onError = () => {
        if (ref.current) {
            ref.current.style.display = 'none'
        }
    }

    return (
        <img
            className={`navigation__background-image background-image__element_${index} ${additionalClass}`}
            src={`/assets/waterfall/jpg/${src}.jpg`}
            ref={ref}
            onError={onError}
            loading='lazy'
            alt='link background'
        />
    );
}

const NavigationElement = ({ year, images }: { year: string, images: string[] }) => {
    var adiitionalName: string = '';

    const background = images.map((image, index) => {
        var addClass = '';
        if(images.length < 2) {
            addClass = 'navigation__background-image_standalone';
        } else if (images.length < 3) {
            addClass = 'navigation__background-image_pair';
        }
        return <BackgroundImage 
            src={image} 
            key={index} 
            index={index}
            additionalClass={addClass}
        />
    });

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