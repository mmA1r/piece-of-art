import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationElement from './NavigationElement/NavigationElement';

import './navigation.scss';

const Navigation = ({ data }: { data: { [key: string]: string[] } }) => {
    const navRef = useRef<HTMLUListElement>(null);
    const location = useLocation().pathname.split('/');

    useEffect(() => {
        
    });

    var content: JSX.Element = <></>;

    if (location.length > 2 && location[2].length > 0) { // case url consist sub-path after /gallery/...
        //className = 'gallrey-navigation mini-navigation-mode';
        //content = Object.keys(data)
        //    .reverse()
        //    .filter(year => data[location[2]] !== data[year])
        //    .map((year, index) =>
            
        //        <NavigationElement
        //            key={index}
        //            year={year}
        //            images={data[year]}
        //        />
        //    )
        //;
    } else {
        content = (
            <nav className={'gallrey-navigation'}>
                <ul 
                    onWheel={() => console.log(2)}
                    className='navigation__list'
                    ref={navRef}
                >
                    {
                        Object.keys(data)
                            .reverse()
                            .map((year, index) =>
                                <NavigationElement 
                                    key={index}
                                    year={year}
                                    images={data[year]}
                                />
                        )
                    }
                </ul>
            </nav>
        )
    }

    return content;
}

export default Navigation;