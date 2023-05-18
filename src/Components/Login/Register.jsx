import React, {  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import animReg from '../../Animation/86974-registration.json'
import Lottie from 'lottie-react'



const Register = () => {
    const location = useLocation()
    
    const navigate = useNavigate()
    
    const [error,setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        
        
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        const conformPassword = event.target.conformPassword.value;
        const photoUrl = event.target.photoUrl.value;
        console.log(name,photoUrl)
        
        if(password.length<6){
            setError('Password must contain at least 6 charecter.')
            return
        }
        else if(password != conformPassword){
            setError('Incorrect conform password')
            return
        }
            else{
            
        }
        
    }
    return (
        
        <div>
            <div className='bg-gray-700'>
                
            </div>
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <Lottie animationData={animReg}></Lottie>
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <form onSubmit={handleSubmit}>
                        

                        <input className="text-sm w-full mb-4 px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Your name" name='name' />
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="email" placeholder="Email Address" name='email' required />
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" name='password' required />
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Conform password" name='conformPassword' required />
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Photo URL" name='photoUrl' />
                        <div>
                            <h1 className='text-sm text-rose-700'>{error}</h1>
                        </div>
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            
                            <span className='text-blue-400'>Already have an account?<Link to='/login' className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"> Login</Link></span>
                            
                        </div>
                        <div className="text-center md:text-left">
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
                        </div>
                    </form>

                </div>
            </section>
            
        </div>
    );
};

export default Register;