import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationElement from './NavigationElement/NavigationElement';

import './navigation.scss';

const Navigation = ({ data }: { data: { [key: string]: string[] } }) => {
    const navRef = useRef<HTMLUListElement>(null);
    const location = useLocation().pathname.split('/'); // make new Component that stick to header

    useEffect(() => {
        const nav = navRef.current;
        if (nav) {
            const items = Array.from(nav.children) as HTMLLIElement[];
            if (Object.keys(data).length <= 7) {
                items.forEach(item => {
                    item.addEventListener('mouseenter', () => nav.classList.add('hovered'));
                    item.addEventListener('mouseleave', () => nav.classList.remove('hovered'));
                });
            } else {
                const first = nav.firstChild as HTMLLIElement;
                const last = nav.lastChild as HTMLLIElement;
                if(first && last) {
                    first.classList.add('left-edge');
                    last.classList.add('right-edge');
                }
            }
        }
    });

    var content: JSX.Element = <></>;
    var buttons: JSX.Element = <></>;
    var addClass = '';
    
    if (location.length <= 2 || location.length <= 3 && location[2].length <= 0) {
        if (Object.keys(data).length <= 7) {
            content = <ul 
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
        } else {
            content = <ul 
                className='navigation__list navigation__list_wide'
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
        }
    }

    const moveCarousel = (bool: boolean) => {
        const nav = navRef.current;
        if (nav) {
            if (nav.firstChild && nav.lastChild) {
                var cloneLast: null | HTMLLIElement;
                var cloneFirst: null | HTMLLIElement;

                if(bool) {
                    cloneLast = nav.lastChild.cloneNode(true) as HTMLLIElement;
                    cloneLast.style.position = 'absolute';
                    cloneLast.style.top = '0';
                    cloneLast.style.transform = 'translateX(calc(-100% - 24px))';
                    nav.firstChild.appendChild(cloneLast);
                } else {
                    cloneFirst = nav.firstChild.cloneNode(true) as HTMLLIElement;
                    cloneFirst.style.position = 'absolute';
                    cloneFirst.style.top = '0';
                    cloneFirst.style.transform = 'translateX(calc(100% + 8px))';
                    nav.lastChild.appendChild(cloneFirst);
                }

                const arr = Array.from(nav.children) as HTMLLIElement[];
                arr.forEach(item => {
                    item.style.transition = '.3s ease-in-out';
                    if(bool) {
                        item.style.transform = 'translateX(calc(100% + 16px))';
                    } else {
                        item.style.transform = 'translateX(calc(-100% - 16px))';
                    }
                });

                setTimeout(() => {
                    arr.forEach(item => {
                        item.removeAttribute('style');
                    });
                    if (bool && nav.lastChild && nav.firstChild) { 
                        nav.insertBefore(nav.lastChild, nav.firstChild);
                        if (cloneLast) { cloneLast.remove(); }
                    } else if (nav.firstChild) {
                        nav.appendChild(nav.firstChild);
                        if (cloneFirst) { cloneFirst.remove(); }
                    }
                }, 300)
            }
        }
    }

    if (Object.keys(data).length > 7) {
        buttons = <div>
            <button onClick={() => moveCarousel(false)} className='gallery__carousel-button'>вперед</button>
            <button onClick={() => moveCarousel(true)} className='gallery__carousel-button'>назад</button>
        </div>
        addClass = 'gallrey-navigation_wide';
    }

    return (
        <nav className={`gallrey-navigation ${addClass}`}>
            { content }
            { buttons }
        </nav>
    );
}

export default Navigation;