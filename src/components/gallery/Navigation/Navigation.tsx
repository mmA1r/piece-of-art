import NavigationElement from './NavigationElement/NavigationElement';

import './navigation.scss';

const mockedData: {[key: string]: string[]} = {
    "all": [],
    "2019": ['azula', 'fool', 'scarecrow'],
    "2020": ['koto', 'heart', 'morning'],
    "2021": ['memories', 'purple', 'violet'],
    "2022": ['war', 'samurai', 'thoughts'],
    "2023": ['dragon', 'float', 'train'],
}

const Navigation = () => {
    const navElements = Object.keys(mockedData)
        .reverse()
        .map((year, index) => 
            <NavigationElement key={index} year={year} images={mockedData[year]} />
        );
    
    return(
        <div className={'gallrey-navigation'}>
            { navElements }
        </div>
    );
}

export default Navigation;