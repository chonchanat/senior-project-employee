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
import InformationActivity from './pages/InformationActivity';
import Setting from './pages/Setting';

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
    path: "/staff-activity/:id",
    element: <PrivateRoute><InformationActivity /></PrivateRoute>,
  },
  {
    path: "/staff-setting",
    element: <PrivateRoute><Setting /></PrivateRoute>,
  },
  {
    path: "/*",
    element: <Navigate to="/signin" />,
  },
])

export default App;
