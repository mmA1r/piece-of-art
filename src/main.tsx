import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Main, mainLoader } from './components/main/Main.tsx';
import { Gallery, galleryLoader  } from './components/gallery/Gallery.tsx';

import NavigationWide from './components/gallery/NavigationWide/NavigationWide.tsx';
import { ContentWrapper, contentLoader } from './components/gallery/ContentWrapper/ContentWrapper.tsx';

import Mediator from './services/Mediator/Mediator.ts';
import ImageStorage from './services/ImageStorage/ImageStorage.ts';

import './index.scss';
import './main.scss';

const mediator = new Mediator;
const imageStorage = new ImageStorage({ mediator });

export const Modules = createContext({ mediator, imageStorage });

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Main/>} />
            <Route path="main" element={<Main/>}/>
            <Route path="gallery" element={<Gallery />}>
                <Route index element={<NavigationWide />}/>
                <Route path=':category' element={<ContentWrapper />}/>
            </Route>
            <Route path="*" element={<div>notFound</div>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Modules.Provider value={{ mediator, imageStorage }}>
        <RouterProvider router={router}/>
    </Modules.Provider>
);