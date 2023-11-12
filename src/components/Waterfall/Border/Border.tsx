import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import './border.scss';

const Border = () => {
    const [ref, inView] = useInView({ threshold: 1 });
    const pathRef = useRef<SVGPathElement>(null);
    const curveRef = useRef<SVGAnimateElement>(null);
    const circleRef = useRef<SVGAnimateElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        const curve = curveRef.current;
        const circle = circleRef.current;
        
        if(inView && path && curve && circle) {
            if (path.id === 'border-path_curve') {
                circle.beginElement();
                path.setAttribute('id', 'border-path_circle');
            } else {
                curve.beginElement();
                path.setAttribute('id', 'border-path_curve');
            }
        } 
    });

    return (
        <svg ref={ref} className={"intro__border"} viewBox="0 0 390 130" preserveAspectRatio={"none"}>
            <path ref={pathRef} id={"border-path_curve"} d="M0 0C253.5 167.4 382 90.8 390 0V130H0V0Z"/>
            <animate
                ref={circleRef}
                xlinkHref={"#border-path_circle"}
                attributeName={'d'}
                from={"M0 0C253.5 167.4 382 90.8 390 0V130H0V0Z"}
                to={"M0 31.35C153.07 -10.48 238.56 -10.42 390 31.3487V130H0V31.3487Z"}
                begin={""}
                dur={"1.2s"}
                fill={"freeze"}
                repeatCount={"1"}
            />
            <animate
                ref={curveRef}
                xlinkHref={"#border-path_curve"}
                attributeName={'d'}
                from={"M0 31.35C153.07 -10.48 238.56 -10.42 390 31.3487V130H0V31.3487Z"}
                to={"M0 0C253.5 167.4 382 90.8 390 0V130H0V0Z"}
                begin={""}
                dur={"1.2s"}
                fill={"freeze"}
                repeatCount={"1"}
            />
        </svg>
    );
}

export default Border;