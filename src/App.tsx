import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from './components/Fallback/Fallback';

const Intro = lazy(() => import('./components/Intro/Intro'));
const Waterfall = lazy(() => import('./components/Waterfall/Waterfall'));

import './app.scss'

const Main = () => <div className={"main"}>
    <Suspense fallback={<Fallback />}>
        <Intro />
        {/*<Waterfall />*/}
    </Suspense>
</div>

const Gallery = () => <div className={"gallery"}>
    <Suspense fallback={<Fallback />}>
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