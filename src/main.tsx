import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx'
import Mediator from './services/Mediator/Mediator.ts';

import './index.scss';

const mediator = new Mediator;

export const Modules = createContext({ mediator });

const basename = '/';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Modules.Provider value={{ mediator }}>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </Modules.Provider>
)
