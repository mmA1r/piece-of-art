import { useEffect, useRef } from 'react';

import CloudImage from './CloudImage/CloudImage';

import './clouds.scss';

const Clouds = () => {
    const cloudWrapperRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLImageElement>(null);
    const leftCloudRef = useRef<HTMLImageElement>(null);
    const rightCludRef = useRef<HTMLImageElement>(null);
    const foregroundRef = useRef<HTMLImageElement>(null);

    const clouds = [backgroundRef, leftCloudRef, rightCludRef, foregroundRef];
    
    const cache : { [key: string]: HTMLImageElement } = {}; // сюда скидываются кэшированные картинки

    useEffect(() => {
        const cloudWrapper = cloudWrapperRef.current;

        const observer = new IntersectionObserver(entries => {      // когда появляется и исчезает из view port-а
            entries.forEach(entry => {
                if (entry.target.classList.contains('intro__clouds')) {
                    if (entry.isIntersecting) {
                        clouds.forEach(({ current }, index) => {           // подгружаем картинку из кэша
                            if (current && !current.hasAttribute('src')) { // и убираем low-resolution задник
                                current.removeAttribute('style');
                                current.setAttribute('src', cache[index].src);
                            }
                        });
                    } else {
                        clouds.forEach(({ current }, index) => {    // удаляем src, чтобы не нагружало оперативу
                            if (current) {                          // и добавляем low-resolution задник на всякий
                                current.removeAttribute('src');
                                current.style.backgroundImage = cache[index].style.backgroundImage;
                            }
                        });
                    }
                }
            });
        });

        if (cloudWrapper) { 
            observer.observe(cloudWrapper);
        }

        return () => {
            if (cloudWrapper) {
                observer.unobserve(cloudWrapper);
            }
        }
    }, []);

    const chacheImages = (image: HTMLImageElement, index: number) => {
        cache[index] = image;
    }

    return(
        <div
            ref={cloudWrapperRef}
            className={"intro__clouds"}
        >
            <CloudImage cacheImageSrc={chacheImages} index={0} ref={backgroundRef} alt={'background'} name={'back-cloud'}/>
            <CloudImage cacheImageSrc={chacheImages} index={1} ref={leftCloudRef} alt={'part of cloud'} name={'left-cloud'}/>
            <CloudImage cacheImageSrc={chacheImages} index={2} ref={rightCludRef} alt={'part of cloud'} name={'right-cloud'}/>
            <CloudImage cacheImageSrc={chacheImages} index={3} ref={foregroundRef} alt={'foreground'} name={'fore-cloud'}/>
        </div>
    );
}

export default Clouds;