import Clouds from './Clouds/Clouds';
import Emblem from './Emblem/Emblem';
import GalleryBlock from './GalleryBlock/GalleryBlock';

import './intro.scss';

const Intro = () => {

    return (
        <section className={"intro"}>
            <Clouds />
            <div className={"intro__content-wrapper"}>
                <Emblem />
                <GalleryBlock />
            </div>
        </section>
    );
}

export default Intro;
