import {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen/>}>
    <Component {...props} />
  </Suspense>
);

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout/>,
      children: [
        {element: <Home/>, index: true},
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout/>,
      children: [
        {path: '404', element: <NotFound/>},
        {path: '*', element: <Navigate to="/404" replace/>},
      ],
    },
    {path: '*', element: <Navigate to="/404" replace/>},
  ]);
}

// Dashboard
const Home = Loadable(lazy(() => import('../pages/Home')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
