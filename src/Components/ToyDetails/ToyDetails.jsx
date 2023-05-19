import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    const { price,subCategory, name,rating,quantity, category, postedBy, details, picture, _id } = toy
    console.log(toy)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category:{category}</p>
                    <p>Subcategory:{subCategory}</p>
                    <p>Price:{price}</p>
                    <p>Seller:{postedBy}</p>
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