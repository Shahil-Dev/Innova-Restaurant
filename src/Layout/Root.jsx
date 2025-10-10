import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Shop from "../Pages/Shop";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Order from "../Pages/Order";
import PrivateRoute from "../Firebase/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: "/cart",
        element: <Shop></Shop>
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
  },
]);

export default router;



