import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ToyDetails = () => {
    const toy = useLoaderData()
    useTitle('Toy-Place|toy-details')
    const { price,subCategory, name,rating,quantity, category, postedBy, details,sellerName, picture, _id } = toy
    const {user} = useContext(AuthContext)
    console.log(toy)
    return (
        <div className='flex justify-center items-center'>
            <div className="w-full mt-8 md:w-3/5 card bg-base-100 shadow-xl my-8">
                <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category:{category}</p>
                    <p>Subcategory:{subCategory}</p>
                    <p>Price:{price}</p>
                    <p>Seller:{sellerName}</p>
                    <p>Email:{postedBy}</p>
                    <p>Quantity:{!quantity? '0':quantity}</p>
                    <p>Rating:{rating}</p>
                    <p>Details:{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;