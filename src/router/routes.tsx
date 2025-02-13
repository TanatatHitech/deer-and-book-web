import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Profile = lazy(() => import('../pages/Users/Profile'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const About = lazy(() => import('../pages/About'));

// *Smart Crop Routes
import Error404 from '../pages/Pages/Error404';

// * User Routes
import AuthSignInView from '@/pages/Auth/SignIn/View';
import HomeView from '@/pages/Home/View';

import Register from '@/pages/Register/View';
import Login from '../pages/Login/View';

import CropCalendar from '@/pages/CropCalendar/View';

import ProfileAccountView from '@/pages/Profile/Account/View';
import DashboardView from '@/pages/Dashboard/View';

import Nopage from '@/pages/NoPage/View';

import CropCareView from '@/pages/CropCare/List/View';
import Layouts from '@/pages/Forms/Layouts';
import BookDetailsView from '@/pages/BookDetails/View';

const routes = [
    // *Smart Crop Routes
    {
        path: '/auth/signin',
        element: <AuthSignInView />,
        layout: 'blank',
    },
    { path: '/no-page', element: <Nopage /> },
    {
        path: '/dashboard/bi',
        element: <DashboardView />,
    },
    {
        path: '/home',
        element: <HomeView />,
    },
    {
        path: '/book-details/:id',
        element: <BookDetailsView />,
        layout: 'blank',
    },
    {
        path: '/register',
        element: <Register />,
        layout: 'blank',
    },
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/register',
        element: <Register />,
        layout: 'blank',
    },
    {
        path: '/crop-care',
        element: <CropCareView />,
    },
    {
        path: '/land/*',
        element: <Navigate to="/land/my-land" />,
    },
    {
        path: '/crop-calendar',
        element: <CropCalendar />,
    },

    {
        path: '/profile/account',
        element: <ProfileAccountView />,
    },
    {
        path: '/profile/*',
        element: <Navigate to="/profile/account" />,
    },

    // dashboard
    {
        path: '/',
        element: <AuthSignInView />,
        layout: 'blank',
    },

    // Users page
    {
        path: '/users/profile',
        element: <Profile />,
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    },

    {
        path: '/about',
        element: <About />,
        layout: 'blank',
    },
];

export { routes };
