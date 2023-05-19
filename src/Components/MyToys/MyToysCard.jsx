import React from 'react';
import { Link } from 'react-router-dom';


const MyToysCard = ({ toy,handleDelete }) => {
    const { price,subCategory, name,rating,quantity, category, postedBy, details, picture, _id } = toy
    
    
    return (
        <div className="card card-side bg-slate-300 border-2 h-48 md:h-80  w-full">
            <figure><img src={picture} alt="toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {name}</h2>
                <p>Category:{category}</p>
                <p>Subcategory:{subCategory}</p>
                <p>Price:{price}</p>
                <p>Seller:{postedBy}</p>
                <p>Quantity:{!quantity? '0':quantity}</p>
                <p>Rating:{rating}</p>
                <p>{details}</p>
                
                <div className="card-actions justify-end">
                    <Link to={`/updateToy/${_id}`}>Edit</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;