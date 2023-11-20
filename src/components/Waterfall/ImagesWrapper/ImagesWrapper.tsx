import { useEffect, useRef, useState } from 'react';

import WaterfallImage from './WaterfallImage/WaterfallImage';

import './ImagesWrapper.scss';

const ImageSection = ({ nodes }: { nodes: string[] }) => {
    const [images, setImages] = useState<JSX.Element[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setImages(
                        nodes.map((node, index) => 
                            <WaterfallImage
                                name={node}
                                key={index}
                            />
                        )
                    );

                    observer.disconnect();
                }
            });
        });

        if (section) {
            observer.observe(section);
        }
    }, []);

    return ( 
        <div
            ref={sectionRef}
            className={"waterfall__section waterfall__images-wrapper"}
        >
            { images }
        </div> 
    );
}

const ImagesWrapper = () => {

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

export default ImagesWrapper;
