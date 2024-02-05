import PATH from "./path";
import Home from './pages/Home';
import Register from './pages/Inquiry/Register';
import Confirm from "./pages/Inquiry/Confirm";
import Help from './components/Help';

const routes = [
    {
        path: PATH.HOME,
        component: Home,
    },
    {
        path: PATH.REGISTER,
        component: Register,
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