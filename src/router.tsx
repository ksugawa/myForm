import PATH from "./path";
import Home from './pages/Home';
import RegisterInd from './pages/Inquiry/RegisterInd';
import RegisterBz from './pages/Inquiry/RegisterBz';
import Confirm from "./pages/Inquiry/Confirm";
import Help from './components/Help';

const routes = [
    {
        path: PATH.HOME,
        component: Home,
    },
    {
        path: PATH.REGISTER_IND,
        component: RegisterInd,
    },
    {
        path: PATH.REGISTER_BZ,
        component: RegisterBz,
    },
    {
        path: PATH.CONFIRM,
        component: Confirm,
    },
    {
        path: PATH.HELP,
        component: Help,
    },
];

export default routes;