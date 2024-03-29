import { useRef, useEffect, useState } from 'react';

import NavigationElement from './NavigationElement/NavigationElement';
import NavigationButton from './NavigationButton/NavigationButton';
import NavigationRange from './NavigationRange/NavigationRange';

import './navigationWide.scss';

export const NavigationSkeleton = () => <div className='gallery-navigation-skeleton'>
    <div className='gallery-navigation-skeleton__elem'/>
    <div className='gallery-navigation-skeleton__elem'/>
    <div className='gallery-navigation-skeleton__elem'/>
    <div className='gallery-navigation-skeleton__elem'/>
    <div className='gallery-navigation-skeleton__elem'/>
</div>

export const NavigationWide = ({ images }: { images: { [key: string]: string[] } }) => {
    const navRef = useRef<HTMLUListElement>(null);
    const [size, setSize] = useState(window.innerWidth);

    var buttons: JSX.Element = <></>;
    var cardIndicate = <></>;
    var addClass = '';
    var isWide = '';

    const imagesArray = Object.keys(images);
    const shallowCopy = { ...images }
    shallowCopy["all"] = [];
    
    const navigation = imagesArray
        .reverse()
        .map((year, index) =>
        <NavigationElement 
            key={index}
            year={year}
            images={shallowCopy[year]}
        />);

    const length = imagesArray.length;

    useEffect(() => {
        const nav = navRef.current;

        if (nav) {
            const items = Array.from(nav.children) as HTMLLIElement[];
            if (length <= 7 && images) {
                items.forEach(item => {
                    item.addEventListener('mouseenter', () => nav.classList.add('hovered'));
                    item.addEventListener('mouseleave', () => nav.classList.remove('hovered'));
                });
            }
        }

        if (length > 7 && size > 768) {
            document.addEventListener('wheel', onWheelMove);
            document.addEventListener('keydown', onKeyDownMove);
        }

        window.addEventListener('resize', onResize);

        return () => {
            
            if (length > 7 && size > 768) {
                document.removeEventListener('wheel', onWheelMove);
                document.removeEventListener('keydown', onKeyDownMove);
            }

            window.removeEventListener('resize', onResize);
        }
    }, [ size ]);

    const onResize = () => {
        if((size <= 768 && window.innerWidth > 768) || (size > 768 && window.innerWidth <= 768)) {
            setSize(window.innerWidth);
        }
    };

    const onWheelMove = (e:any) => {
        if(e.deltaY > 0) {
            carouselMove(true);
        } else {
            carouselMove(false);
        }
    }

    const onKeyDownMove = (e:any) => {
        if (e.keyCode === 38 || e.keyCode === 37) {
            carouselMove(false);
        }
        if (e.keyCode === 39 || e.keyCode === 40) {
            carouselMove(true);
        }
    }

    const carouselMove = (bool: boolean) => {
        const nav = navRef.current;
        const delay = 300;
        if (nav && !nav.classList.contains('acting') && window.innerWidth > 768) {
            nav.classList.add('acting');
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
                    item.style.transition = `${delay}ms ease-in-out`;
                    if(bool) {
                        if(item.clientWidth > 40) {
                            item.style.transform = `translateX(56px)`;
                        } else {
                            item.style.transform = 'translateX(calc(100% + 16px))';
                        }
                    } else {
                        if(item.clientWidth > 40) {
                            item.style.transform = `translateX(-56px)`;
                        } else {
                            item.style.transform = 'translateX(calc(-100% - 16px))';
                        }
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
                    nav.classList.remove('acting');
                }, delay);
            }
        }
    }

    if (length > 7 && size > 768) {
        isWide = 'navigation__list_wide'
        addClass = 'gallrey-navigation_wide';

        buttons = <div className='navigation__button-wrapper'>
            <NavigationButton onClick={() => carouselMove(false)} />
            <NavigationButton onClick={() => carouselMove(true)} />
        </div>

        cardIndicate = <NavigationRange/>;
    }

    return (
        <div className='navigation-wrapper'>
            <nav className={`gallrey-navigation ${addClass}`}>
                <ul
                    className={`navigation__list ${isWide}`}
                    ref={navRef}
                >
                    { navigation }
                </ul>
            </nav>
            { buttons }
            { cardIndicate }
        </div>
    );
}