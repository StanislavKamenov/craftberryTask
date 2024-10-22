import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Root = () => {
    return (
        <React.Fragment>
            <ScrollRestoration />
            <Outlet />
        </React.Fragment>
    );
};

export default Root;
