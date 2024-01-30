import { MouseEventHandler } from "react";

import './navigationButton.scss';

const NavigationButton = ({ onClick } : { onClick: MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button onClick={onClick} className='gallery__carousel-button'>
            <svg className="gallery-navigation__button_svg" fill="none">
                <path d="M28 12c6-2-2-12-2-12 6 7 10 10 19 15-9 5-13 8-19 15 0 0 8-10 2-12-13-3-28-3-28-3s15 0 28-3Z"/>
            </svg>
        </button>
    );
}

export default NavigationButton;