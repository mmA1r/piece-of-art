//import { useEffect } from 'preact/compat';
//import { useInView } from 'react-intersection-observer';

//import './imagefall.scss';
//import './imagesSettings.scss';

//const Image = ({ name }: { name: string }) => {
//    const [ref, inView, entry] = useInView({ triggerOnce: true });

//    useEffect(() => {
//        if (inView && entry) { 
//            entry.target.classNameList.add('image_appear');

//            const timeout = setTimeout(() => {
//                const imageEntity = entry.target as unknown as HTMLDivElement;
//                imageEntity.style.willChange = 'auto';

//                return clearTimeout(timeout);
//            }, 1300);
//        }; 
//    });

//    return <div ref={ref} data-name={name} className={"imagefall__image-wrapper"} />;
//}

//const ImageSection = ({ nodes }: { nodes: string[] }) => {
//    const [ref, inView, entry] = useInView({ triggerOnce: true });

//    useEffect(() => { if (inView && entry) entry.target.classNameList.add('image_visible'); }); 

//    const imageStack = nodes.map(name => <Image name={name} />);

//    return ( <div ref={ref} className={"imagefall__section"}>{ imageStack }</div> );
//}

//const Imagefall = () => {

//    const imagesStack = [
//        [ 'skies','thoughts','scarecrow','azula','island', 'heart' ],
//        [ 'graveyard', 'lake', 'dragon', 'humility' ],
//        [ 'nightmare', 'memories', 'puppet', 'fool', 'train', 'girl' ]
//    ];

//    return (
//        <section className={"imagefall"}>
//            {imagesStack.map(images => <ImageSection nodes={images} />)}
//        </section>
//    );
//}

//export default Imagefall;
