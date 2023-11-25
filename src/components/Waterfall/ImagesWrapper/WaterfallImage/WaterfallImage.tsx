import { useEffect, useRef } from 'react';

import './waterfallImage.scss';

const WaterfallImage = ({ name }: { name: string } ) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const pictureRef = useRef<HTMLPictureElement>(null);

    useEffect(() => {
        const cacheImage = new Image();
        
        const image = imageRef.current;
        const picture = pictureRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (image) {
                    const picture = entry.target as HTMLPictureElement;
                    if (entry.isIntersecting) {
                        if (!cacheImage.src) {
                            const lastChild = picture.lastChild as HTMLImageElement;
    
                            for (let i = picture.children.length - 1; i >= 0; i--) {
                                const child = picture.children[i] as HTMLImageElement | HTMLSourceElement;
                                const src = child.getAttribute('data-src');
    
                                if (child && child !== lastChild && src) {
                                    child.setAttribute("srcset", src);
                                } else if (child === lastChild && src) {
                                    lastChild.setAttribute("src", src);
                                }
                            }
                        } else {
                            if (!image.hasAttribute('src')) {
                                image.setAttribute('src', cacheImage.src);
                            }
                        }
                    } else {
                        if (image.currentSrc && !cacheImage.src) {
                            cacheImage.src = image.currentSrc;
                            for (let i = picture.children.length - 1; i >= 0; i--) {
                                const child = picture.children[i] as HTMLImageElement | HTMLSourceElement;
                                const srcType = child.getAttribute('data-src-type');

                                if (srcType && child.hasAttribute(srcType)) {
                                    child.removeAttribute(srcType);
                                }
                            }
                        } else if (cacheImage.src && image.src) {
                            image.removeAttribute('src');
                        }
                    }
                }
            });
        }, {
            rootMargin: "14px"
        });


        if (picture) {
            observer.observe(picture);
        }

        if (image) {
            image.addEventListener('load', onLoad);
        }
        
        return () => {
            if (picture) {
                observer.unobserve(picture);
            } 
        }
    }, []);

    const onLoad = () => {
        const image = imageRef.current;
        if (image) {
            image.classList.add('image_appear');
            image.removeEventListener('load', onLoad);
        }
    }

    return (
        <picture className={`waterfall__image-container ${name}_image`} ref={pictureRef}>
            <source data-src-type={"srcset"} data-src={`/assets/waterfall/avif/${name}.avif`} type="image/avif" />
            <source data-src-type={"srcset"} data-src={`/assets/waterfall/avif/${name}.webp`} type="image/webp" />
            <source data-src-type={"srcset"} data-src={`/assets/waterfall/avif/${name}.jpg`} type="image/jpg" />
            <img
                className={'waterfall__image'}
                data-src={`/assets/waterfall/avif/${name}.jpg`}
                data-src-type={"src"}
                style={{ backgroundImage: `url(/assets/waterfall/low-res/${name}_low-res.jpg)`}}
                ref={imageRef}
                width={16}
                height={9}
                loading='lazy'
                role='presentation'
            />
        </picture>
    );
}

export default WaterfallImage;