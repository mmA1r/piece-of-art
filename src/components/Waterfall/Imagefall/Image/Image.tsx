import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Image = ({ name }: { name: string }) => {
    const [ref, inView, entry] = useInView({ triggerOnce: true });

    //const observer = new IntersectionObserver(entries => {
    //    entries.forEach(entry => {
    //        if (entry.isIntersecting) {
    //            console.log(2);
    //        }
    //        else {
    //            console.log(3)
    //        }
    //    });
    //}, { rootMargin: "50px" });

    useEffect(() => {
        if (inView && entry) {
            //observer.observe(entry.target)
            //entry.target.classList.add('image_appear');


            //const timeout = setTimeout(() => {
            //    const imageEntity = entry.target as unknown as HTMLDivElement;
            //    imageEntity.style.willChange = 'auto';

            //    return clearTimeout(timeout);
            //}, 1300);
        }; 
    });

    const style = { backgroundImage: `url(/assets/waterfall/low-res/${name}.jpg)` };

    return (
        <div
            className={"imagefall__image-wrapper"}
        >
            <picture>
                <source 
                    srcSet={`/assets/waterfall/avif/${name}.avif`}
                    type="image/avif"
                />
                <source 
                    srcSet={`/assets/waterfall/webp/${name}.webp`}
                    type="image/webp"
                />
                <source 
                    srcSet={`/assets/waterfall/webp/${name}.jpg`}
                    type="image/jpg"
                />
                <img
                    className={`waterfall__image ${name}_image`}
                    src={`/assets/waterfall/jpg/${name}.jpg`}
                    style={style}
                    ref={ref}
                    //onLoad={clearBackground}
                    //alt={alt}
                    role='presentation'
                />
            </picture>
        </div>
    );
}

export default Image;