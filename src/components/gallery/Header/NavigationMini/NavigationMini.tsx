import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './navigationMini.scss';

const NavigationMini = ({ list }: { list: string[] }) => {
    const navRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onClick = () => {
        const wrapper = wrapperRef.current;
        const button = buttonRef.current;

        if(wrapper && button) {
            if (!wrapper.classList.contains('mini-navigation-wrapper_appear')) {
                wrapper.classList.add('mini-navigation-wrapper_appear');
                button.classList.add('mini-navigation__open-button_opened');
            } else {
                wrapper.classList.remove('mini-navigation-wrapper_appear');
                button.classList.remove('mini-navigation__open-button_opened');
            }
        }
    }

    const scrollNavigation = (direction: boolean) => {
        const nav = navRef.current;
        if(nav) {
            if(direction) {
                nav.scrollLeft -= nav.offsetWidth;
            } else {
                nav.scrollLeft += nav.offsetWidth;
            }
        }
    }

    const itemList = list.map((item, index) =>
        <li key={index} className='mini-navigation__item'>
            <Link 
                to={item}
                className='mini-navigation__link'
            >
                { item }
            </Link>
        </li>
    );

    return <div ref={wrapperRef} className='mini-navigation-wrapper'>
        <nav className='mini-navigation'>
            <button 
                className='mini-navigation__button navigation__button_prev'
                onClick={() => scrollNavigation(true)}
            />
            <ul 
                ref={navRef} 
                className='mini-navigation__list'
            >
                { itemList }
            </ul>
            <button 
                className='mini-navigation__button navigation__button_next'
                onClick={() => scrollNavigation(false)}
            />
        </nav>
        <button 
            className='mini-navigation__open-button'
            onClick={onClick}
            ref={buttonRef}
        />
    </div>
}

export default NavigationMini;