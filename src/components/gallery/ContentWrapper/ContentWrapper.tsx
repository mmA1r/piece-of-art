import { useLayoutEffect } from 'react';
import { useParams, useNavigate, useNavigation, useLocation } from 'react-router-dom';

import './contentWrapper.scss';

export const ContentWrapper = () => {
    const answer = useParams();
    const navigation = useNavigation();
    const location = useLocation();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (!mockedData[location.pathname.split('/')[2]]) {
            navigate('/notFound');
        }
    })

    if (navigation.state === "loading") {
        return <div>loading...</div>
    }

    var mockedData: {[key: string]: string[]} = {
        "all": [],
        "2019": ['azula', 'fool', 'scarecrow'],
        "2020": ['koto', 'heart', 'morning'],
        "2021": ['memories', 'purple', 'violet'],
        "2022": ['war', 'samurai', 'thoughts'],
        "2023": ['dragon', 'float', 'train'],
        "2024": ['azula'],
        //"2025": ['violet'],
    }

    return (
        <div className={`gallery__content-wrapper`}>
        </div>
    );
}

export const contentLoader = () => {
    
}