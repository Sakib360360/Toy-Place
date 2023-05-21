import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { FaArrowDown } from "react-icons/fa";

const AddToy = () => {
    const { user } = useContext(AuthContext)
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

            "category": category,
            "subCategory": SubCategory,
            "postedBy": postedBy,
            "name": name,
            "price": price,
            "picture": picture,
            "rating": rating,
            "quantity": quantity,
            "details": details,
            "sellerName": sellerName


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
            <form className='border-2 p-4 m-4 bg-sky-50 shadow-2xl rounded-lg' onSubmit={handleAddToy}>
                <div className='flex font-semibold text-primary  justify-center my-4'>
                    <h1>Add Your Toy to Sell</h1>
                </div>
                <div className='flex justify-center text-primary mt-4 animate-bounce'>
                        <FaArrowDown></FaArrowDown>
                    </div>
                {/* form row */}
                <div className='flex my-4 '>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <p className="label-text text-sky-500">Toy name</p>
                        </label>
                        <label className=" ">

                            <input  defaultValue={''} required type="text" placeholder="Toy name" name='name' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <p className="label-text text-sky-500">Price</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Price" defaultValue={''} name='price' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>

                </div>
                {/* form row */}
                <div className='flex my-4 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text text-sky-500">Category</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Category" defaultValue={''} name='category' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <p className="label-text text-sky-500">sub-category</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="sub-category" defaultValue={''} name='SubCategory' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>

                </div>
                {/* form row */}
                <div className='flex my-4 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text text-sky-500">Email</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Email" value={user?.email} name='email' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <p className="label-text text-sky-500">Seller name</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Seller Name" value={user?.displayName} name='sellerName' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>


                </div>
                {/* photourl */}
                <div className='flex my-4 '>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <p className="label-text text-sky-500">Rating</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Rating" name='rating' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>

                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <p className="label-text text-sky-500">Quantity</p>
                        </label>
                        <label className=" ">

                            <input required type="number" placeholder="Quantity Available" name='quantity' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>

                </div>
                <div className='flex my-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <p className="label-text text-sky-500">Photo URL</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Photo URL" name='url' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>



                </div>
                <div className='flex my-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <p className="label-text text-sky-500">Details</p>
                        </label>
                        <label  className=" ">

                            <input   required type="text" placeholder="Details" name='details' className="input w-full   input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                </div>
                <div>
                    <input required type="submit" className="btn btn-block btn-outline" />

                </div>
            </form>
        </div>
    );
};

export default AddToy;