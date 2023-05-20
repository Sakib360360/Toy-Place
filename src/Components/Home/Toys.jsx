import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Toys = ({ data }) => {
    const { price, subCategory, name, rating, quantity, category, postedBy, details, picture, _id } = data
    return (
        <div data-aos="flip-right">
            <div className="card w-96 bg-base-100 shadow-sm border-2 ">
                <figure><img className='h-60 rounded-t-2xl w-72 p-2' src={picture} alt="photo of product" /></figure>
                <hr />
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Subcategory: {subCategory}</p>
                    <p>Price: {price}</p>
                    <p>Quantity available: {!quantity ? '0' : quantity}</p>
                    <p>Rating: {rating}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/toyDetails/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;