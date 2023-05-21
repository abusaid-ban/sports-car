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
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";
import ToyDetails from "../Pages/Home/ToyDetails/ToyDetails";
import AddToy from "../Pages/Home/AddToy/AddToy";
import MyToys from "../Pages/Home/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import UpdateToys from "../Pages/Home/UpdateToys/UpdateToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addToys',
                element: <AddToy></AddToy>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/viewDetails/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/toyDetails/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/myToys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,

            },
            {
                path: "/updateToys/:id",
                element:<UpdateToys></UpdateToys> ,
                loader:({params})=>fetch(`http://localhost:5000/myToys/${params.id}`)

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