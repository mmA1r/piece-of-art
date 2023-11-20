import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

import './cloudImage.scss';

const CloudImage = forwardRef((
    {
        cacheImageSrc, 
        index, 
        name, 
        alt  
    }: { 
        cacheImageSrc: (image: HTMLImageElement, index: number) => void; 
        index: number; 
        name: string; 
        alt: string 
    },
    ref
) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const firstSource = useRef<HTMLSourceElement>(null);
    const secondSource = useRef<HTMLSourceElement>(null);
    const pictureRef = useRef<HTMLPictureElement>(null);

    useImperativeHandle(ref, () => {
        return imgRef.current; // отправить ref к родителю
    });

    useEffect(() => {
        const image = imgRef.current;
        if (image) {
            image.addEventListener("load", onSuccesLoad); // вешаем листенер не через атрибут, чтобы можно было потом его удалить
        }
    });

    const extension = name === 'back-cloud' ? 'jpg' : 'png';
    const style = { backgroundImage: `url(/assets/intro/low-res/${name}_low-res.${extension})` };

    const onSuccesLoad = () => {
        const image = imgRef.current;
        if (image) {
            const source = image.currentSrc;                 // берем src у оптимально подгруженной картинки, не важно jpg avif или webp
            image.src = source;                              // обновить src у img, чтобы при удлаении <source> он не попытался подгрузить картинку из src
            const newImage = createImage(source);            // создать img для дальшейшего кэширования
            clearBackgroundStyle(image);                     // удалить style чтобы не отсвечивал
            clearSources();                                  // удалить лишние sourc-ы у picture, чтобы при удалении src в дальшейшем, он не подгружал картинки из <source>
            cacheImageSrc(newImage, index);                  // закешировать ранее созданную картинку в родительсом элементе
            image.removeEventListener("load", onSuccesLoad); // удалить этот листенер, чтобы при обновлении src на 42-й строке, он не зашел в бесконечный цикл
        }
    }

    const clearBackgroundStyle = (image: HTMLImageElement ) => image.removeAttribute('style');
    
    const clearSources = () => {
        const pic = pictureRef.current;
        const firstSrc = firstSource.current;
        const secondSrc = secondSource.current;

        if (pic && firstSrc && secondSrc) {
            pic.removeChild<HTMLSourceElement>(firstSrc);
            pic.removeChild<HTMLSourceElement>(secondSrc);
        }
    }

    const createImage = (src: string) => {
        const imgObj = new window.Image();
        imgObj.src = src;
        imgObj.style.backgroundImage = style.backgroundImage;
        return imgObj;
    }

    return (
        <div className={`intro__background-image-wrapper`} >
            <picture ref={pictureRef}>
                <source
                    ref={firstSource}
                    srcSet={`/assets/intro/avif/${name}.avif`}
                    type="image/avif"
                />
                <source
                    ref={secondSource}
                    srcSet={`/assets/intro/webp/${name}.webp`}
                    type="image/webp"
                />
                <img
                    className={`intro__background-image ${name}_background-image`}
                    src={`/assets/intro/png/${name}.${extension}`}
                    style={style}
                    ref={imgRef}
                    alt={alt}
                    loading='lazy'
                    role='presentation'
                />
            </picture>
        </div>
    );
});

export default CloudImage;