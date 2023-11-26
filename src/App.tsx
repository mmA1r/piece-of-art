import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from './components/Fallback/Fallback';

const Intro = lazy(() => import('./components/main/Intro/Intro'));
const Waterfall = lazy(() => import('./components/main/Waterfall/Waterfall'));
const Footer = lazy(() =>  import('./components/main/Footer/Footer'));
const BackButton = lazy(() => import('./components/gallery/BackButton/BackButton'));
const GalleryNavigation = lazy(() => import('./components/gallery/GalleryNavigation/GalleryNavigation'));

import './app.scss'

const Main = () => <div className={"main"}>
    <Suspense fallback={<Fallback />}>
        <Intro />
        <Waterfall />
        <Footer />
    </Suspense>
</div>

const Gallery = () => <div className={"gallery"}>
    <Suspense fallback={<Fallback />}>
        <BackButton />
        <GalleryNavigation />
    </Suspense>
</div>

const App = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Main />}
            />
            <Route
                path='/main'
                element={<Main />}
            />
            <Route
                path='/gallery'
                element={<Gallery />}
            />
            <Route
                path='*'
                element={<div>notFound</div>}
            />
        </Routes>
    );
}

export default App;