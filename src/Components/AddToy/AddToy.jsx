import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const AddToy = () => {
    const {user} = useContext(AuthContext)
    useTitle('Toy-Place|add toy')
    const handleAddToy = (event) => {
        
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
        const sellerName = form.sellerName.value;
        const newToy = { 
            
            "category":category,
            "subCategory":SubCategory,
            "postedBy":postedBy,
            "name":name,
            "price":price,
            "picture":picture,
            "rating":rating,
            "quantity":quantity,
            "details":details,
            "sellerName":sellerName


        }
        console.log(newToy)

        fetch('https://toy-place-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    }


    return (
        <div className=' flex justify-center'>
            <form className='border-2 p-4 m-4 rounded-lg' onSubmit={handleAddToy}>
                {/* form row */}
                <div className='flex mb-8 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <label className=" ">

                            <input defaultValue={''} type="text" placeholder="Toy name" name='name' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Price" defaultValue={''} name='price' className="input w-full input-bordered" />
                        </label>
                    </div>

                </div>
                {/* form row */}
                <div className='flex mb-8 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Category" defaultValue={''} name='category' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">sub-category</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="sub-category" defaultValue={''} name='SubCategory' className="input w-full input-bordered" />
                        </label>
                    </div>

                </div>
                {/* form row */}
                <div className='flex mb-8 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Email" value={user?.email} name='email' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Seller Name" value={user?.displayName} name='sellerName' className="input w-full input-bordered" />
                        </label>
                    </div>
                    

                </div>
                {/* photourl */}
                <div className='flex mb-8 '>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Photo URL"  name='url' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className=" ">

                            <input type="number" placeholder="Quantity Available"  name='quantity' className="input w-full input-bordered" />
                        </label>
                    </div>

                </div>
                <div className='flex mb-8 '>

                <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Rating"  name='rating' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className=" ">

                            <input type="text" placeholder="Details"  name='details' className="input w-full  input-bordered" />
                        </label>
                    </div>

                </div>
                <div>
                    <input type="submit" className="btn btn-block btn-outline" />

                </div>
            </form>
        </div>
    );
};

export default AddToy;