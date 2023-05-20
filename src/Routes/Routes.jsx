import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Blog from "../Pages/Home/Blog/Blog";
import ErrorPage from "../errorPage";
import AllToys from "../Pages/Home/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage />,
        // errorElement: <ErrorPage />,
      }
]);

export default router;