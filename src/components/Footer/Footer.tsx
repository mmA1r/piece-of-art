import { useEffect, useRef } from 'react';

import Socials from './Socials/Socials';

import './footer.scss'

const Footer = () => {
    const socialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const socials = socialsRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("socials_in-view");

                    if (socials) {
                        observer.unobserve(socials);
                    }
                }
            });
        });
        if (socials) {
            observer.observe(socials);
        }
    }, []);

    return (
        <section className={"footer"}>
            <div 
                ref={socialsRef} 
                className='socials__wrapper'
            >
                <Socials />
                {/*<Waves />*/}
            </div>
        </section>
    );
}

export default Footer;