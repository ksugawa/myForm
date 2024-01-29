import PATH from "./path";
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';
import Help from './pages/Inquiry/component/Help';

const routes = [
    {
        path: PATH.HOME,
        component: Home,
    },
    {
        path: PATH.INQUIRY,
        component: Inquiry,
    },
    {
        path: PATH.HELP,
        component: Help,
    }
]

export default routes;