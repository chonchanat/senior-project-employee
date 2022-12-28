import './App.css';

import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";

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
    element: <StaffActivity />,
  },
  {
    path: "/staff-account",
    element: <StaffAccount />,
  },
  {
    path: "/staff-customer-account",
    element: <CustomerAccount />,
  },
  {
    path: "/staff-activity/:id",
    element: <InformationActivity />,
  },
  {
    path: "/staff-setting",
    element: <Setting />,
  },
  {
    path: "/*",
    element: <Navigate to="/signin" />,
  },
])

export default App;
