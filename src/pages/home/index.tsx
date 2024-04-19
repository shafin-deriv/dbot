import { useEffect } from 'react';
import { Fragment } from 'react/jsx-runtime';

import { useAuthData } from '@deriv-com/api-hooks';

import { useStore } from '../../hooks/useStore';

import Dashboard from './dashboard';

export default function Home() {
    const { isAuthorized } = useAuthData();
    const { test_store } = useStore();
    const { setIsAuthorized } = test_store;

    useEffect(() => {
        setIsAuthorized(isAuthorized);
    }, [isAuthorized, setIsAuthorized]);

    return (
        <Fragment>
            <div>Home Page</div>
            <Dashboard />
        </Fragment>
    );
}
