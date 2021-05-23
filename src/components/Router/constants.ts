import React from 'react';
import PATHS from './paths';
import Route from './types';

const Home = React.lazy(() => import('pages/Home'));
const NotFound = React.lazy(() => import('pages/NotFound'));

const ROUTES: Route[] = [
  {
    path: PATHS.Home,
    component: Home,
    name: 'Home',
    exact: true,
    isPrivate: false,
  },
  {
    component: NotFound,
    name: 'Not Found',
  },
];

export default ROUTES;
