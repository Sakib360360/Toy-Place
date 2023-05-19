import React from 'react';

const MyToysCard = ({toy}) => {
    const {price,name,category,postedBy,details,picture} = toy
    return (
        <div className="card card-side bg-base-100 shadow-xl max-w-xs">
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>{postedBy}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;