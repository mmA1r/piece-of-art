import {  } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from '../Fallback/Fallback';

const Intro = lazy(() => import('./Intro/Intro'));
const Waterfall = lazy(() => import('./Waterfall/Waterfall'));
const Footer = lazy(() =>  import('./Footer/Footer'));

export const Main = () => <div className={"main"}>
    <Suspense fallback={<Fallback />}>
        <Intro />
        <Waterfall />
        <Footer />
    </Suspense>
</div>

export const mainLoader = () => {
    
}