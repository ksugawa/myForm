import PATH from "./path";
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';

const routes = [
    {
        path: PATH.HOME,
        component: Home,
    },
    {
        path: PATH.INQUIRY,
        component: Inquiry,
    }
]

export default routes;