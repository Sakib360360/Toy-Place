import React from 'react';
import Swal from 'sweetalert2';

const MyToysCard = ({ toy }) => {
    const { price, name, category, postedBy, details, picture, _id } = toy
    const handleDelete = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://toy-place-server.vercel.app/delete/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',

                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount>0){
                            Swal.fire('Deleted!', '', 'success')
                        }
                    })
                
            } else if (result.isDenied) {
                Swal.fire('Try again', '', 'info')
            }
        })






    }
    return (
        <div className="card card-side bg-base-100 shadow-xl max-w-xs">
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>{postedBy}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;