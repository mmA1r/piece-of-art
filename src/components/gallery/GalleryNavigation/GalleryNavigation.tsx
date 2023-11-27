import NavigationElement from './NavigationElement/NavigationElement';

import './galleryNavigation.scss';

const mockedData: {[key: string]: string[]} = {
    2019: ['azula', 'fool', 'scarecrow'],
    2020: ['koto', 'heart', 'morning'],
    2021: ['memories', 'purple', 'violet'],
    2022: ['war', 'samurai', 'thoughts'],
    2023: ['dragon', 'float', 'train'],
}

const GallerySvg = () => <div className='gallery-navigation__gallery-icon-wrapper'>
    <svg className='gallery-navigation__gallery-icon' viewBox="0 0 21 21" fill="none" >
        <path d="m3.37 17.5-.46-.2a.5.5 0 0 0 .46.7v-.5Zm3.76-9.05.44-.25a.5.5 0 0 0-.9.06l.46.2Zm4.23 7.44-.43.25a.5.5 0 0 0 .86 0l-.43-.25Zm2.4-4 .42-.29a.5.5 0 0 0-.84.02l.43.26Zm3.8 5.61v.5a.5.5 0 0 0 .42-.78l-.42.28ZM3 1.5h15v-1H3v1Zm15 0c.83 0 1.5.67 1.5 1.5h1A2.5 2.5 0 0 0 18 .5v1ZM19.5 3v15h1V3h-1Zm0 15c0 .83-.67 1.5-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM18 19.5H3v1h15v-1Zm-15 0A1.5 1.5 0 0 1 1.5 18h-1A2.5 2.5 0 0 0 3 20.5v-1ZM1.5 18V3h-1v15h1Zm0-15c0-.83.67-1.5 1.5-1.5v-1A2.5 2.5 0 0 0 .5 3h1Zm2.33 14.7L7.6 8.63l-.93-.38-3.76 9.05.92.38Zm2.87-9 4.23 7.44.87-.5L7.57 8.2l-.87.5Zm5.1 7.45 2.4-4.01-.86-.52-2.4 4.01.85.52Zm1.55-3.99 3.8 5.62.83-.56-3.8-5.62-.83.56ZM17.56 17H3.36v1h14.2v-1ZM16.13 5.63c0 .9-.73 1.64-1.63 1.64v1a2.63 2.63 0 0 0 2.63-2.64h-1ZM14.5 7.27c-.9 0-1.63-.74-1.63-1.64h-1a2.63 2.63 0 0 0 2.63 2.64v-1Zm-1.63-1.64c0-.9.73-1.63 1.63-1.63V3a2.63 2.63 0 0 0-2.63 2.63h1ZM14.5 4c.9 0 1.63.73 1.63 1.63h1A2.63 2.63 0 0 0 14.5 3v1Z"/>
    </svg>
</div>

const SpotSvg = () => <svg className='gallery-navigation__spot-icon' viewBox="0 0 140 95" fill="none" preserveAspectRatio='none'>
    <path d="M128.73 23.46c21.45 26.67-9.7 48.51-27.23 48.51C79.42 71.97 75.9 94 49.36 94 22.83 94-27 60.66-27 19.54-27-21.58 10.19-51 52.36-51c42.18 0 41.13 30.65 76.37 74.46Z"/>
</svg>

const GalleryNavigation = () => {
    const navElements = Object.keys(mockedData).map((year, index) => <NavigationElement key={index} year={year} images={mockedData[year]} />);
    
    return(
        <div className={'gallrey-navigation'}>
            { navElements }
            <button className='show-all-button'>
                <GallerySvg />
                <span className='show-all-button__tilte'>show all</span>
                <SpotSvg />
            </button>
        </div>
    );
}

export default GalleryNavigation;