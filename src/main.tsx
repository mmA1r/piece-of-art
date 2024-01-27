import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx'

import Mediator from './services/Mediator/Mediator.ts';
import ImageStorage from './services/ImageStorage/ImageStorage.ts';

import './index.scss'

const mediator = new Mediator;
const imageStorage = new ImageStorage({ mediator });

export const Modules = createContext({ mediator, imageStorage });

const basename = '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Modules.Provider value={{ mediator, imageStorage }}>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </Modules.Provider>
);