import { useEffect, useRef } from 'react';

import ImagesWrapper from './ImagesWrapper/ImagesWrapper';
import Border from './Border/Border';

import './waterfall.scss';

const TextWrapper = ({ classNameName, content }: { classNameName: string; content: string }) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const text = textRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('text_appear');
                    observer.disconnect();
                }
            });
        }, { threshold: .7 });

        if (text) { 
            observer.observe(text); 
        }

        return () => {
            if (text) {
                observer.unobserve(text);
            }
        }
    }, []);

    return (
        <div ref={textRef} className={classNameName}>
            <h2>{ content }</h2>
        </div>
    );
}

const Waterfall = () => {

    return (
        <section className={"waterfall"}>
            <Border />
            <TextWrapper classNameName='phrase-wrapper' content='piece of art'/>
            <TextWrapper classNameName='sentence-wrapper' content='A website can be art too'/>
            <TextWrapper classNameName='sentence-wrapper' content='right?'/>
            <ImagesWrapper />
        </section>
    );
}

export default Waterfall;
