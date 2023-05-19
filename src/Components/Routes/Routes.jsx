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
import ToyDetails from '../ToyDetails/ToyDetails';
import Gallery from '../Gallery/Gallery';
import UpdateToy from '../UpdateToy/UpdateToy';


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
            },
            {
                path:'/toyDetails/:id',
                errorElement:<ErrorPage></ErrorPage>,
                element:<PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader:({params})=> fetch(`https://toy-place-server.vercel.app/toyDetails/${params.id}`)
            },
            {
                path:'/gallery',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Gallery></Gallery>
            },
            {
                path:'/updateToy/:id',
                errorElement:<ErrorPage></ErrorPage>,
                element:<UpdateToy></UpdateToy>,
                loader:({params})=>fetch(`https://toy-place-server.vercel.app/toyDetails/${params.id}`)
            }

        ]
    }
])

export default Routes;