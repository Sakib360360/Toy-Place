import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className='flex flex-row justify-center items-center my-20'><button className="btn loading">loading</button></div>
    }
    else if(user){
        return children
    }
    return <Navigate to='/login' replace state={{from:location}}></Navigate>
};

export default PrivateRoutes;



