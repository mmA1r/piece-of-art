import { useInView } from 'react-intersection-observer';

//import Imagefall from './Imagefall/Imagefall';
//import Border from './Border/Border';

import './waterfall.scss'

interface TextWrapper {
    classNameName: string;
    content: string;
}

//const TextWrapper: FunctionComponent<TextWrapper> = ({ classNameName, content }) => {
//    const [ref, inView, entry] = useInView({ triggerOnce: true });

//    useEffect(() => { 
//        if (inView && entry) {
//            const parent = entry.target.parentElement;
//            if (parent) parent.classNameList.add('text_appear');
//        } 
//    });

//    return (
//        <div className={classNameName}>
//            <h2 ref={ref}>{ content }</h2>
//        </div>
//    );
//}

const Waterfall = () => {

    return (
        <section className={"waterfall"}>
            {/*<Border />
            <TextWrapper classNameName='phrase-wrapper' content='piece of art'/>
            <TextWrapper classNameName='sentence-wrapper' content='A website can be art too'/>
            <TextWrapper classNameName='sentence-wrapper' content='right?'/>
            <Imagefall />*/}
        </section>
    );
}

export default Waterfall;
