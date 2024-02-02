import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Inquiry = lazy(() => import('./Inquiry'));

export { Home, Inquiry }; 