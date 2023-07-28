import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import Products from "../pages/Products/Products";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/products",
                element: <Products />,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
])