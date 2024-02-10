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
import { NavigationWide, NavigationSkeleton  } from './components/gallery/NavigationWide/NavigationWide.tsx';
import { ContentWrapper, ContentFallBack } from './components/gallery/ContentWrapper/ContentWrapper.tsx';
import WrapperComponent from './components/WrapperComponent/WrapperComponent.tsx';

//css
import './index.scss';
import './main.scss';

const socket = io('http://localhost:3000');

const mediator = new Mediator;
const server = new Server(socket, mediator);
const imageStorage = new ImageStorage({ mediator });

export const Modules = createContext({ mediator, imageStorage, server });

const galleryLoader = () => {
    if (!imageStorage.getImageTitles()) {
        server.getGalleryImagesEmit();
    }
    return null;
}

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
                loader={() => galleryLoader()}
            >
                <Route 
                    index                       /* index is "gallery/", so "gallery/year/..." wont spawn */
                    element={
                        <WrapperComponent 
                            Component={NavigationWide}
                            Fallback={NavigationSkeleton}
                        />
                    }
                />
                <Route 
                    path='year/:category' 
                    element={
                        <WrapperComponent 
                            Component={ContentWrapper}
                            Fallback={ContentFallBack}
                        />
                    }
                />
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