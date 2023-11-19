import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Image from './Image/Image';

import './imagefall.scss';
//import './imagesSettings.scss';

const ImageSection = ({ nodes }: { nodes: string[] }) => {
    const [ref, inView, entry] = useInView({ triggerOnce: true });

    useEffect(() => { if (inView && entry) entry.target.classList.add('image_visible'); }); 

    const imageStack = nodes.map((name, index) => <Image key={index} name={name} />);

    return ( 
        <div 
            ref={ref} 
            className={"imagefall__section"}
        >{ imageStack }</div> 
    );
}

const Imagefall = () => {

    const imagesStack = [
        [ 'purple','thoughts','scarecrow','azula','float','heart' ],
        [ 'samurai','lake','dragon','humility','koto','morning' ],
        [ 'violet', 'memories', 'cozy', 'fool', 'train', 'charm' ]
    ];

    return (
        <section className={"imagefall"}>
            { imagesStack.map((images, index) => <ImageSection key={index} nodes={images} />) }
        </section>
    );
}

export default Imagefall;
