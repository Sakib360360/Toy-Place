import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ data }) => {
    const { price, subCategory, name, rating, quantity, category, postedBy, details, picture, _id } = data
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="photo of product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category:{category}</p>
                    <p>Subcategory:{subCategory}</p>
                    <p>Price:{price}</p>
                    <p>Quantity available:{!quantity ? '0' : quantity}</p>
                    <p>Rating:{rating}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/toyDetails/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;