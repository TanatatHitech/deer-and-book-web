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
import LandsList from '@/pages/Lands/List/View';
import Register from '@/pages/Register/View';
import Login from '../pages/Login/View';
import LandDetailView from '@/pages/Lands/Detail/View';
import LandBoundaryMapView from '@/pages/Lands/BoundaryMap/View';
import CreatePlanView from '@/pages/Plan/Create/View';
import PlanDetailOverviewView from '@/pages/Plan/DetailOverview/View';
import PlanDetailRoundView from '@/pages/Plan/CreatePlan/View';
import CropCalendar from '@/pages/CropCalendar/View';
import GAPView from '@/pages/GAP/View';
import ProfileAccountView from '@/pages/Profile/Account/View';
import DashboardView from '@/pages/Dashboard/View';
import ActivePlanView from '@/pages/Plan/List/View';
import SelectPlanView from '@/pages/Plan/Assign/View';
import PlanDetailView from '@/pages/Plan/Detail/View';
import ViewEditFertilizer from '@/pages/Plan/Edit/Fertilizer/View';
import ViewEditPesticide from '@/pages/Plan/Edit/Pesticide/View';
import ViewEditPlantType from '@/pages/Plan/Edit/PlantType/View';

// * Admin Routes
// import { ProtectedAdmin } from './ProtectedAdmin';
import ActiveLandDetailView from '@/pages/Lands/ActiveDetail/View';
import Nopage from '@/pages/NoPage/View';
import TodayPlan from '@/pages/TodayPlan/View';
import LandGAPView from '@/pages/Lands/GAP/View';
import ViewGAP from '@/pages/Lands/GAP/Upload/ViewGAP/View';
import NewGAP from '@/pages/Lands/GAP/Upload/NewGAP/View';
import RenewGAP from '@/pages/Lands/GAP/Upload/RenewGAP/View';
import SelectGAPInput from '@/pages/Lands/GAP/Select';
import GAPForm from '@/pages/Lands/GAP/Form/Form';

import CropCareView from '@/pages/CropCare/List/View';
import Layouts from '@/pages/Forms/Layouts';

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
        layout: 'blank',
    },
    {
        path: '/land/my-land',
        element: <LandsList />,
    },
    {
        path: '/land/gap',
        element: <LandGAPView />,
    },
    {
        path: '/land/gap/select',
        element: <SelectGAPInput />,
    },
    {
        path: '/land/gap/view',
        element: <ViewGAP />,
    },
    {
        path: '/land/gap/new/form',
        element: <GAPForm />,
    },
    {
        path: '/land/gap/renew/form',
        element: <GAPForm />,
    },
    {
        path: '/land/gap/new/upload',
        element: <NewGAP />,
    },
    {
        path: '/land/gap/renew/upload',
        element: <RenewGAP />,
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
        path: '/active-land/:id',
        element: <ActiveLandDetailView />,
    },
    { path: '/today-plan', element: <TodayPlan /> },
    {
        path: '/land/:id',
        element: <LandDetailView />,
    },
    {
        path: '/land/:id/boundary-map',
        element: <LandBoundaryMapView />,
    },
    {
        path: '/crop-care',
        element: <CropCareView />,
    },
    {
        path: '/start',
        element: <ActivePlanView />,
    },
    {
        path: '/plan',
        element: <CreatePlanView />,
    },
    {
        path: '/start/select-land',
        element: <PlanDetailOverviewView />,
    },
    {
        path: '/plan/edit/fertilizer/:id',
        element: <ViewEditFertilizer />,
    },
    {
        path: '/plan/edit/pesticide/:id',
        element: <ViewEditPesticide />,
    },
    {
        path: '/plan/edit/plant-type/:id',
        element: <ViewEditPlantType />,
    },
    {
        path: '/plan/:id',
        element: <PlanDetailView />,
    },
    {
        path: '/plan/:id/round/:roundId',
        element: <PlanDetailRoundView />,
    },
    {
        path: '/start/select-land/:id/select-plan',
        element: <SelectPlanView />,
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
        path: '/gap',
        element: <GAPView />,
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
        element: <HomeView />,
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

    {
        path: '*',
        element: <Error404 />,
        layout: 'blank',
    },
];

export { routes };
