import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { routes } from './routes';

const finalRoutes = routes.map((route) => {
    switch (route.layout) {
        case 'blank':
            return {
                ...route,
                element: <BlankLayout>{route.element}</BlankLayout>,
            };
        default:
            return {
                ...route,
                element: <DefaultLayout>{route.element}</DefaultLayout>,
            };
    }
});

const router = createBrowserRouter(finalRoutes);

export default router;
