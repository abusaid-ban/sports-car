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
            },
            {
                path:'/addToys',
                element:<AddToy></AddToy>,
                loader:()=>fetch('http://localhost:5000/products')
            },
            {
                path:'/viewDetails/:id',
                element:<ViewDetails></ViewDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/toyDetails/:id',
                element:<ToyDetails></ToyDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
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