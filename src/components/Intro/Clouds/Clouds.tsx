import { useRef } from 'react';

import './clouds.scss';

const Image = ({ name, alt }: { name: string; alt: string }) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const clearBackground = () => {
        const image = imgRef.current;
        if (image) {
            image.removeAttribute('style');
        }
    }

    const extension = name === 'back-cloud' ? 'jpg' : 'png';

    const style = { backgroundImage: `url(/assets/intro/low-res/${name}_low-res.${extension})` };


    return (
        <div className={`intro__background-image-wrapper`} >
            <picture>
                <source 
                    srcSet={`/assets/intro/avif/${name}.avif`}
                    type="image/avif"
                />
                <source 
                    srcSet={`/assets/intro/webp/${name}.webp`}
                    type="image/webp"
                />
                <img
                    className={`intro__background-image ${name}_background-image`}
                    src={`/assets/intro/png/${name}.${extension}`}
                    style={style}
                    ref={imgRef}
                    onLoad={clearBackground}
                    alt={alt}
                    role='presentation'
                />
            </picture>
        </div>
    );
}

const Clouds = () => <div className={"intro__clouds"}>
    <Image alt={'background'} name={'back-cloud'}/>
    <Image alt={'part of cloud'} name={'left-cloud'}/>
    <Image alt={'part of cloud'} name={'right-cloud'}/>
    <Image alt={'foreground'} name={'fore-cloud'}/>
</div>

export default Clouds;