import React from 'react';
import { Route } from "react-router-dom";
import loadable from 'loadable-components';

const routerMap = [
    {
        path: '/login',
        component: () => import('../views/login')
    },
    {
        path: '/good',
        component: () => import('../views/good')
    }
].map(item => {
    return {
        ...item,
        component: loadable(item.component)
    }
})

export default function MyRouter () {
    return (
        <React.Fragment>
            {
                routerMap.map((item, index) => {
                    return <Route key={index} {...item} />
                })
            }
        </React.Fragment>
    )
}