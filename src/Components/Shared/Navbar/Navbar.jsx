import React, { useContext } from 'react';
import './Navbar.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import logo from '../../../../public/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const signOut = () => {
        logOut()
            .then()
        navigate('/')
            .catch(error => console.log(error))

    }
    return (
        <>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToys'>All Toys</Link></li>

                            {
                                user && <><li><Link to='/myToys'>My Toys</Link></li>
                                    <li><Link to='/addToy'>Add A Toy</Link></li></>
                            }
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <a className='w-12 h-12 border-none flex items-center '><img src="https://i.ibb.co/qpWbK12/logo.png" alt="logo" /><span className='font-semibold'>ToyPlace</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to='/allToys'>All Toys</NavLink></li>

                        {
                            user && <><li><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            } to='/myToys'>My Toys</NavLink></li>
                                <li><NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                } to='/addToy'>Add A Toy</NavLink></li></>
                        }
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div>
                            <div>
                                <ul className='menu menu-horizontal px-1'>
                                    <li><button onClick={signOut}>Log Out</button></li>
                                </ul>
                            </div>


                        </div> : <div>
                            <ul className='menu menu-horizontal px-1'>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                    }
                    {
                        user?.photoURL && <a className='z-50' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}> <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label><Tooltip id="my-tooltip" /></a>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;