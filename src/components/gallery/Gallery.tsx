import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from '../Fallback/Fallback';

const Header = lazy(() => import('./Header/Header'));

const Gallery = () => {
    return (
        <div className={"gallery"}>
            <Suspense fallback={<Fallback />}>
                <Header/>
                <Outlet/>
            </Suspense>
        </div>
    );
}

export default Gallery;