import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Fallback from '../Fallback/Fallback';

const Header = lazy(() => import('./Header/Header'));

var mockedData: {[key: string]: string[]} = {
    "all": [],
    "2019": ['azula', 'fool', 'scarecrow'],
    "2020": ['koto', 'heart', 'morning'],
    "2021": ['memories', 'purple', 'violet'],
    "2022": ['war', 'samurai', 'thoughts'],
    "2023": ['dragon', 'float', 'train'],
    "2024": ['azula'],
    //"2025": ['violet'],
    //"2026": ['war'],
    //"2027": ['float'],
}

export const Gallery = () => {
    const answer = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Fallback />;
    }

    const list = Object.keys(mockedData);

    return (
        <div className={"gallery"}>
            <Suspense fallback={<Fallback />}>
                <Header list={list}/>
                <Outlet context={mockedData}/>
            </Suspense>
        </div>
    );
}

export const galleryLoader = () => {

}