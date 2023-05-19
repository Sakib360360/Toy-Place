import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Home/Home';
import ErrorPage from '../Errorpage/Errorpage';
import Register from '../Login/Register';
import Login from '../Login/Login';
import AddToy from '../AddToy/AddToy';
import AllToy from '../AllToy/AllToy';
import PrivateRoutes from './PrivateRoutes';
import MyToys from '../MyToys/MyToys';


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Home></Home>
            },
            {
                path:'/register',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Register></Register>
            },
            {
                path:'/login',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Login></Login>
            },
            {
                path:'/addToy',
                errorElement:<ErrorPage></ErrorPage>,
                element:<PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path:'/allToys',
                errorElement:<ErrorPage></ErrorPage>,
                element:<AllToy></AllToy>
            },
            {
                path:'/myToys',
                errorElement:<ErrorPage></ErrorPage>,
                element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            }

        ]
    }
])

export default Routes;