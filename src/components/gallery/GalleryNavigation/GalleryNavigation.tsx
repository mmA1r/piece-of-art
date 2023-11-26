import NavigationElement from './NavigationElement/NavigationElement';

import './galleryNavigation.scss';

const mockedData: {[key: string]: string[]} = {
    2019: ['azula', 'fool', 'scarecrow'],
    2020: ['koto', 'heart', 'morning'],
    2021: ['memories', 'purple', 'violet'],
    2022: ['war', 'samurai', 'thoughts'],
    2023: ['dragon', 'float', 'train'],
}

const GalleryNavigation = () => {

    const navElements = Object.keys(mockedData).map((year, index) => <NavigationElement key={index} year={year} images={mockedData[year]} />);
    
    return(
        <div className={'gallrey-navigation'}>
            { navElements }
        </div>
    );
}

export default GalleryNavigation;