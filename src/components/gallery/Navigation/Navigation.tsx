import { useEffect, useRef, useContext } from 'react';
import NavigationElement from './NavigationElement/NavigationElement';
import { Modules } from '../../../main';

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
    const navRef = useRef<HTMLDivElement>(null);
    const mediator = useContext(Modules).mediator;

    const selectEvent = mediator.getEventNames().SET_YEAR;

    useEffect(()=> {
        mediator.subscribe(selectEvent, changeNavbarState)
        return () => {
            mediator.unsubscribe(selectEvent, changeNavbarState);
        }
    });

    const changeNavbarState = (year: string) => {
        const nav = navRef.current;
        if (year && nav) {
            if (!nav.classList.contains('mini-navigation-mode')) {
                nav.classList.add('mini-navigation-mode');
            }
        }

        if(!year && nav && nav.classList.contains('mini-navigation-mode')) {
            nav.classList.remove('mini-navigation-mode');
        }
    }

    const navElements = Object.keys(mockedData)
        .reverse()
        .map((year, index) => 
            <NavigationElement key={index} year={year} images={mockedData[year]} />
        );
    
    return(
        <div
            className={'gallrey-navigation'}
            ref={navRef}
        >
            { navElements }
        </div>
    );
}

export default Navigation;