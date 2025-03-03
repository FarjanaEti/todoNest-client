import { createBrowserRouter } from "react-router-dom";
import Main from "./Shared/Main";
import Error from "./Shared/Error";
import Home from "./Layout/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);