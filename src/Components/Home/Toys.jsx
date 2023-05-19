import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({data}) => {
    const {name,price,picture,quantity,details,_id} = data
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="photo of product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}</p>
                    <p>Quantity available:{!quantity? '0':quantity}</p>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/toyDetails/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;