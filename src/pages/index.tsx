import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Inquiry/Register'));
const Confirm = lazy(() => import('./Inquiry/Confirm'));


export { Home, Register, Confirm }; 