import React, { ReactElement } from 'react';
import Home from '../pages/Home';

// Types
interface BaseRouteType {
  path: string;
  protected?: boolean;
  failureRedirect?: string;
  children?: RouteType[];
}

interface ElementType extends BaseRouteType {
  element: ReactElement;
  navigate?: never;
}

interface NavigateType extends BaseRouteType {
  navigate: string;
  element?: never;
}

type RouteType = ElementType | NavigateType;

// Routes
const routes: RouteType[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    navigate: '/',
  },
];

export default routes;
