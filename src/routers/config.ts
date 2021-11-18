import { TConfigRouter } from '../types/RouterConfigModel';
import LayoutCustom from '../components/layout';
import HomePage from '../pages/HomePage';

export const publicRoutes: TConfigRouter[] = [
  {
    path: '/',
    component: HomePage,
    layout: LayoutCustom,
    exact: true,
  },
];

export const privateRoutes: TConfigRouter[] = [];
