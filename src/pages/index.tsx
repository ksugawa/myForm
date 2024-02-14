import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const RegisterInd = lazy(() => import('./Inquiry/RegisterInd'));
const RegisterBz = lazy(() => import('./Inquiry/RegisterBz'));
const Confirm = lazy(() => import('./Inquiry/Confirm'));


export { Home, RegisterInd, RegisterBz, Confirm }; 