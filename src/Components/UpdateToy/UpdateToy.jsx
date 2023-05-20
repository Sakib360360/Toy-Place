import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const UpdateToy = () => {
    const data = useLoaderData()
    const { price,subCategory, name,rating,quantity, category, postedBy, details, picture, _id } = data
    const {user} = useContext(AuthContext)
    useTitle('Toy-Place|update-toy')
    const handleUpdateToy = (event) => {
        
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const SubCategory = form.SubCategory.value;
        const rating = form.rating.value;
        const picture = form.url.value;
        const postedBy = form.email.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        
        const updateToy = { 
            
            "category":category,
            "subCategory":SubCategory,
            "postedBy":postedBy,
            "name":name,
            "price":price,
            "picture":picture,
            "rating":rating,
            "quantity":quantity,
            "details":details,
            


        }
        console.log(updateToy)

        fetch(`https://toy-place-server.vercel.app/updateToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully modified',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    }
    console.log(data)
    return (
        <div>
            <div className=' flex justify-center'>
                <form onSubmit={handleUpdateToy}>
                    {/* form row */}
                    <div className='flex mb-8 '>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Toy name</span>
                            </label>
                            <label className="input-group ">

                                <input defaultValue={name} type="text" placeholder="Toy name" name='name' className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Price" defaultValue={price} name='price' className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>
                    {/* form row */}
                    <div className='flex mb-8 '>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Category" defaultValue={category} name='category' className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">sub-category</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="sub-category" defaultValue={subCategory} name='SubCategory' className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>
                    {/* form row */}
                    <div className='flex mb-8 '>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Email" value={user?.email} name='email' className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller name</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Seller Name" defaultValue={user?.displayName} name='postedBy' className="input w-full input-bordered" />
                            </label>
                        </div>


                    </div>
                    {/* photourl */}
                    <div className='flex mb-8 '>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Photo URL" defaultValue={picture} name='url' className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group ">

                                <input type="number" placeholder="Rating" defaultValue={quantity} name='quantity' className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>
                    <div className='flex mb-8 '>

                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Rating" defaultValue={rating} name='rating' className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Details" defaultValue={details} name='details' className="input w-full  input-bordered" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <input type="submit" className="btn btn-block" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;