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

import ProfileAccountView from '@/pages/Profile/Account/View';
import DashboardView from '@/pages/Dashboard/View';

import Nopage from '@/pages/NoPage/View';

import Layouts from '@/pages/Forms/Layouts';
import BookDetailsView from '@/pages/BookDetails/View';
import { ProtectedRoute } from './ProtectedRoute';

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
        element: (
            <ProtectedRoute>
                <HomeView />
            </ProtectedRoute>
        ),
    },
    {
        path: '/book-details/:id',
        element: (
            <ProtectedRoute>
                <BookDetailsView />
            </ProtectedRoute>
        ),
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
        path: '/land/*',
        element: <Navigate to="/land/my-land" />,
    },
    {
        path: '/profile/account',

        element: (
            <ProtectedRoute>
                <ProfileAccountView />
            </ProtectedRoute>
        ),
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
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        ),
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
