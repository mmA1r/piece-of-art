import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavigationMini from './NavigationMini/NavigationMini';

import './header.scss';
import WrapperComponent from '../../WrapperComponent/WrapperComponent';

const WaterSvg = () => <svg className='back-button__water-svg' viewBox="0 0 32 32" fill="none">
    <path d="M.35 16.27c2.95 5.76 10.24 4 17.96-.29 7.73-4.29 13-4.38 13.69.24-3.97-6.3-13.37 3.81-20.55 5.12-4.68.85-11.37.14-11.1-5.07Z"/>
    <path d="M8.93 29.54c8.58 4.5 10.15-1.35 13.2-6.47 3.96-6.67 9.7-5.48 9.7-5.48s-6.38-.22-9.7 9.12c-1.87 5.23-8.22 7.33-13.2 2.83ZM9.35 10.9a3.46 3.46 0 0 1 1.4 1.8c.17.5.24 1.05.19 1.6-.08.8-.44 1.6-.93 2.24a4.89 4.89 0 0 1-8.78-2.26c-.38-1.08.7-3.89.94-3.86-.15-.1-.54 2.91.4 4.58.7 1.48 2 1.93 2.97 2.08.85.14 1.75.01 2.56-.57a3.33 3.33 0 0 0 1.4-2.27c.11-1.13-.67-2.37-1.81-2.48-1.18-.13-2.46 1.24-1.72 2.38.65 1.1 1.9.98 2.09.07 0 .65-.56 1.25-1.14 1.4-1.98.53-2.84-2.01-2.11-3.55.28-.6.6-.88 1.15-1.23a3.2 3.2 0 0 1 3.4.07ZM20.05 6.98a4.66 4.66 0 0 1-.3 3 4.9 4.9 0 0 1-1.28 1.68 6.46 6.46 0 0 1-8.54-.58 6.55 6.55 0 0 1-.63-8.42c.78-1.19 3.54-2.44 3.54-2.44.52-.15.7-.22.7-.22-1.3.53-2.95 2.39-3.62 4.57a5.03 5.03 0 0 0 .92 4.72 4.47 4.47 0 0 0 6.33 1v-.01c1.12-.97 1.5-2.87.53-4.03-1-1.21-3.46-1.1-3.79.67-.37 1.63.9 2.67 1.92 1.99-.59.62-1.66.67-2.36.28-2.33-1.34-.85-4.55 1.22-5.33.8-.3 1.37-.28 2.22-.1a4.29 4.29 0 0 1 3.14 3.22ZM25.15 12.2a2.84 2.84 0 0 1-1.87-.28c-.38-.2-.73-.5-1.01-.86a4.2 4.2 0 0 1 .6-5.45 4.02 4.02 0 0 1 5.27-.18 3.74 3.74 0 0 1 1.39 2.14c.07.34.05.66.05.66a4.61 4.61 0 0 0-2.65-2.45c-1.27-.5-2.31 0-2.98.46a2.87 2.87 0 0 0-1.22 1.83 2.8 2.8 0 0 0 .43 2.19c.58.74 1.75 1.04 2.5.45.79-.61.8-2.18-.3-2.44-1.02-.28-1.7.5-1.3 1.17-.38-.4-.38-1.08-.11-1.51.9-1.46 2.86-.43 3.29.92.17.52.14.88 0 1.42a2.7 2.7 0 0 1-2.1 1.92Z"/>
    <path d="M11.88 1.14C.18 4.02-5.88 25.17 13.43 31.26l-.27.56c-19.2-4.51-15.71-29-.32-31.6l-.96.92Z"/>
    <path d="M2.86 23.67c6.63 3.78 14.06-.38 17.87-3.96-3.38 4.88-14.76 11.56-17.87 3.96Z"/>
    <path d="M2.86346 23.6716C9.48787 27.4503 16.9183 23.2916 20.7271 19.7083C17.3475 24.5946 5.97485 31.2726 2.86346 23.6716Z"/>
</svg>;

const MiniNaviagtionSkeleton = () => {
    return(
        <div className='mini-navigation-skeleton'>
            <div className='mini-navigation-skeleton__elem'/>
            <div className='mini-navigation-skeleton__elem'/>
            <div className='mini-navigation-skeleton__elem'/>
            <div className='mini-navigation-skeleton__elem'/>
            <div className='mini-navigation-skeleton__elem'/>
        </div>
    );
}

const Header = () => {
    const location = useLocation().pathname.split('/');
    const headerRef = useRef<HTMLDivElement>(null);

    var navigation = <></>

    if (location.length > 3 && location[3].length > 0) {
        navigation = <WrapperComponent
            Component={NavigationMini}
            Fallback={MiniNaviagtionSkeleton}
        />
    }

    return(
        <div 
            className='gallery__header'
            ref={headerRef}
        >
            <div className={'gallery__back-button-wrapper'}>
                <Link 
                    to={'/main'}
                    className='gallery__back-button'
                >
                    <WaterSvg />
                </Link>
                <span className='back-button__title'>intro</span>
            </div>
            { navigation }
        </div>
    );
}

export default Header;