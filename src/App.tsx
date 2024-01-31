import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from './components/Fallback/Fallback';

const Intro = lazy(() => import('./components/main/Intro/Intro'));
const Waterfall = lazy(() => import('./components/main/Waterfall/Waterfall'));
const Footer = lazy(() =>  import('./components/main/Footer/Footer'));
const Header = lazy(() => import('./components/gallery/Header/Header'));
const NavigationWide = lazy(() => import('./components/gallery/NavigationWide/NavigationWide'));
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
    const location = useLocation().pathname.split('/');
    var navigation = <></>;

    const mockedData: {[key: string]: string[]} = {
        "all": [],
        "2019": ['azula', 'fool', 'scarecrow'],
        "2020": ['koto', 'heart', 'morning'],
        "2021": ['memories', 'purple', 'violet'],
        "2022": ['war', 'samurai', 'thoughts'],
        "2023": ['dragon', 'float', 'train'],
        "2024": ['azula'],
        //"2025": ['violet'],
        //"2026": ['war'],
        //"2027": ['scarecrow'],
        //"2028": ['scarecrow'],
    }

    const list = Object.keys(mockedData);

    if (location.length <= 2 || location.length <= 3 && location[2].length <= 0) { // if there`s no exact subpath of gallery
        navigation = <NavigationWide data={mockedData}/>                           // in other case navigation will be created in <Header> component
    }

    var routes = list.map((route, index) => <Route path={route} element={<></>} key={index}/>);

    return (
        <div className={"gallery"}> {/* make request to know how much years there and for each create component */}
            <Suspense fallback={<Fallback />}> {/* also get titles of 3 last work fo each year */}
                <Header location={location} list={list}/>
                { navigation }
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