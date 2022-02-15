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
        {element: <Navigate to="/dashboard/one" replace/>, index: true},
        {path: '/dashboard', element: <Navigate to="/dashboard/one" replace/>, index: true},
        {path: '/dashboard/one', element: <PageOne/>},
        {path: '/dashboard/two', element: <PageTwo/>},
        {path: '/dashboard/three', element: <PageThree/>},
        {
          path: '/dashboard/user',
          children: [
            {element: <Navigate to="/dashboard/user/four" replace/>, index: true},
            {path: '/dashboard/user/four', element: <PageFour/>},
            {path: '/dashboard/user/five', element: <PageFive/>},
            {path: '/dashboard/user/six', element: <PageSix/>},
          ],
        },
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
const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
