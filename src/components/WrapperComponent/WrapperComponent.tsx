import { useEffect, useContext, useState } from "react";
import { Modules } from "../../main";

const WrapperComponent = ({ 
    Component,
    Fallback 
}: { 
    Component: any; 
    Fallback: any
}) => {
    const [updater, setUpdater] = useState(false);
    const { mediator, imageStorage } = useContext(Modules);

    useEffect(() => {
        const event = mediator.getEventNames().IMAGES_TITLES_CACHED;
        mediator.subscribe(event, onCacheLoaded);

        return () => {
            mediator.unsubscribe(event, onCacheLoaded);
        }
    }, [ updater ]);

    function onCacheLoaded() {
        setUpdater(!updater);
    }

    const images = imageStorage.getImageTitles();

    if (images) {
        return <Component images={images}/>;
    } else {
        return <Fallback />
    }
}

export default WrapperComponent;