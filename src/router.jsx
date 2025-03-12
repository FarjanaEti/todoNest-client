import { createBrowserRouter } from "react-router-dom";
import Main from "./Shared/Main";
import Error from "./Shared/Error";
import Home from "./Layout/Home";
import SignUp from "./Shared/SignUp";
import LogIn from "./Shared/Login";
import ProfileSetup from "./Component/Profile/ProfileSetUp";
import UsageSelection from "./Component/Profile/UsagesSelection";
import DashboardLayout from "./Component/Dashboard/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'login',
        element:<LogIn></LogIn>
      },
      {
        path:'profile',
        element:<ProfileSetup></ProfileSetup>
      },
      {
        path:'select',
        element:<UsageSelection></UsageSelection>
      },
      {
        path:'dashboard',
        element:<DashboardLayout></DashboardLayout>
      }
    ]
  },
]);