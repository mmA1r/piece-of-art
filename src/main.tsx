import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { io } from "socket.io-client";
//services
import Server from './services/Server/Server.ts';
import Mediator from './services/Mediator/Mediator.ts';
import ImageStorage from './services/ImageStorage/ImageStorage.ts';
//route components
import Main from './components/main/Main.tsx';
import Gallery from './components/gallery/Gallery.tsx';
import NavigationWide from './components/gallery/NavigationWide/NavigationWide.tsx';
import ContentWrapper from './components/gallery/ContentWrapper/ContentWrapper.tsx';

//css
import './index.scss';
import './main.scss';

const socket = io('http://localhost:3000');

const mediator = new Mediator;
const server = new Server(socket, mediator);
const imageStorage = new ImageStorage({ mediator });

export const Modules = createContext({ mediator, imageStorage, server });

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Main/>} />
            <Route 
                path="main" 
                element={<Main/>}
                loader={() => { server.getIntroImagesEmit(); return null; }}
            />
            <Route path="gallery" 
                element={<Gallery />}
                loader={() => { server.getGalleryImagesEmit(); return null; }}
            >
                <Route index element={<NavigationWide />}/> {/* index is "gallery/", so "gallery/year/..." it wont spawn */}
                <Route path='year/:category' element={<ContentWrapper />} />
            </Route>
            <Route path="*" element={<div>notFound</div>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Modules.Provider value={{ mediator, imageStorage, server }}>
        <RouterProvider router={router}/>
    </Modules.Provider>
);