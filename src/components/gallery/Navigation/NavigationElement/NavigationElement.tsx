import { useContext, useRef, useEffect } from 'react';

import { Modules } from '../../../../main';

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
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mediator = useContext(Modules).mediator;

    const setYear = mediator.getEventNames().SET_YEAR;

    useEffect(() => {
        mediator.subscribe(setYear, changeButtonVisibility);

        return () => {
            mediator.unsubscribe(setYear, changeButtonVisibility);
        }
    });

    const changeButtonVisibility = (chosenSelector: string) =>  {
        const button = buttonRef.current;
        if (button) {
            if (chosenSelector === year) {
                button.classList.add('hidden-element');
                button.setAttribute('disabled', '');
            } else if (button.classList.contains('hidden-element')) {
                button.classList.remove('hidden-element');
                button.removeAttribute('disabled');
            }
        } 
    }

    const selectConten = () => mediator.call(setYear, year);

    let adiitionalName: string = '';

    const background = images.map((image, index) => 
        <BackgroundImage src={image} key={index} index={index} />
    );

    if (!images.length) { adiitionalName = 'all-element'; }

    return(
        <button
            onClick={selectConten}
            className={`navigation__element ${adiitionalName}`}
            ref={buttonRef}
        >
            <span className='navigation__year'>{ year }</span>
            <div className='navigation__background-wrapper'>
                { background }
            </div>
        </button>
    );
}

export default NavigationElement;