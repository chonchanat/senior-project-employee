import './App.css';

import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";

import PrivateRoute from './privateRoute';
import Signin from './pages/Signin';
import StaffActivity from './pages/StaffActivity';
import StaffAccount from './pages/StaffAccount';
import CustomerAccount from './pages/CustomerAccount';
import Setting from './pages/Setting';
import ActivityInfoPage from './pages/Info/ActivityInfoPage';
import StaffAccountInfoPage from './pages/Info/StaffAccountInfoPage';
import Dashboard from './pages/Dashboard';
import ActivityDashboard from './pages/Info/ActivityDashBoard';

import Test from './pages/test';

const App = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/staff-activity",
    element: <PrivateRoute><StaffActivity /></PrivateRoute>,
  },
  {
    path: "/staff-account",
    element: <PrivateRoute><StaffAccount /></PrivateRoute>,
  },
  {
    path: "/staff-customer-account",
    element: <PrivateRoute><CustomerAccount /></PrivateRoute>,
  },
  {
    path: "/staff-setting",
    element: <PrivateRoute><Setting /></PrivateRoute>,
  },
  {
    path: "/staff-account/:id",
    element: <PrivateRoute><StaffAccountInfoPage /></PrivateRoute>,
  },
  {
    path: "/staff-activity/:code",
    element: <PrivateRoute><ActivityInfoPage /></PrivateRoute>,
  },
  {
    path: "staff-dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
  },
  {
    path: "staff-dashboard/:code",
    element: <PrivateRoute><ActivityDashboard /></PrivateRoute>
  },

  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/*",
    element: <Navigate to="/signin" />,
  },
])

export default App;
