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
        element: <Dashboard></Dashboard>
      },
      {
        path: "/cart",
        element: <Shop></Shop>
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



