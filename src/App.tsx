import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from './components/Fallback/Fallback';

const Intro = lazy(() => import('./components/main/Intro/Intro'));
const Waterfall = lazy(() => import('./components/main/Waterfall/Waterfall'));
const Footer = lazy(() =>  import('./components/main/Footer/Footer'));
const Header = lazy(() => import('./components/gallery/Header/Header'));
const Navigation = lazy(() => import('./components/gallery/Navigation/Navigation'));
const ContentWrapper = lazy(() => import('./components/gallery/ContentWrapper/ContentWrapper'));

import './app.scss'

const Main = () => <div className={"main"}>
    <Suspense fallback={<Fallback />}>
        <Intro />
        <Waterfall />
        <Footer />
    </Suspense>
</div>

const Gallery = () => {

    const mockedData: {[key: string]: string[]} = {
        "all": [],
        "2019": ['azula', 'fool', 'scarecrow'],
        "2020": ['koto', 'heart', 'morning'],
        "2021": ['memories', 'purple', 'violet'],
        "2022": ['war', 'samurai', 'thoughts'],
        "2023": ['dragon', 'float', 'train'],
        "2024": ['azula'],
        "2025": ['violet'],
        "2026": ['war'],
        "2027": ['scarecrow'],
        "2028": ['scarecrow'],
    }

    var routes = Object.keys(mockedData)
        .map((route, index) => <Route path={route} element={<></>} key={index}/>);

    return (
        <div className={"gallery"}> {/* make request to know how much years there and for each create component */}
            <Suspense fallback={<Fallback />}> {/* also get titles of 3 last work fo each year */}
                <Header />
                <Navigation data={mockedData}/> {/* send this data to Navigation component */}
                <Routes>
                    <Route path='/' element={<></>}/>
                    { routes }
                    <Route path='*' element={<div>not found</div>}/>
                </Routes>
                {/*<ContentWrapper/>*/}
            </Suspense>
        </div>
    );
}

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
                path='/gallery/*'
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