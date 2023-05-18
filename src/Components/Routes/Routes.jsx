import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Home/Home';
import ErrorPage from '../Errorpage/Errorpage';
import Register from '../Login/Register';
import Login from '../Login/Login';


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
                path:'/registration',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Register></Register>
            },
            {
                path:'/login',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Login></Login>
            }
        ]
    }
])

export default Routes;