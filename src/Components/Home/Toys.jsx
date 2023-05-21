import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
AOS.init();

const Toys = ({ data }) => {
    const { price, name, rating,  picture, _id } = data
    const {user} = useContext(AuthContext)
    const handleDetailsButton =()=>{
        user || Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'You must login',
            showConfirmButton: false,
            timer: 1000
          })
        }
    return (
        <div data-aos="flip-right">
            <div className="card w-80 md:w-96 bg-base-100 shadow-sm border-2 ">
                <figure><img className='h-60 rounded-t-2xl w-72 p-2' src={picture} alt="photo of product" /></figure>
                <hr />
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    
                    <p>Price: {price}</p>
                    
                    <p>Rating: {rating}</p>

                    <div className="card-actions justify-end">
                        <button onClick={handleDetailsButton} className="btn btn-primary btn-outline"><Link to={`/toyDetails/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;