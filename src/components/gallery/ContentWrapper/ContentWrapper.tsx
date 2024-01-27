import { useState, useEffect, useContext } from 'react';

import Content from './Content/Content';

import { Modules } from '../../../main';

import './contentWrapper.scss';

const ContentWrapper = () => {
    const [showComponent, setShowComponent] = useState<string>('');
    const { imageStorage, mediator } = useContext(Modules);

    const eventName = mediator.getEventNames().SET_YEAR;

    useEffect(() => {
        mediator.subscribe(eventName, showContent);

        return () => {
            mediator.unsubscribe(eventName, showContent);
        }
    });

    const showContent = (year: string) => setShowComponent(year);

    return (
        <div className={`gallery__content-wrapper`}>
            { 
                showComponent &&  
                <Content
                    year={showComponent} 
                    storage={imageStorage}
                />
            }
        </div>
    );
}

export default ContentWrapper;