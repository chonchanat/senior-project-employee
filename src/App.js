import './App.css';

import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";

import Signin from './pages/Signin';

const App = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/*",
    element: <Navigate to="/signin" />,
  },
])

export default App;
