import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext)
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
        const newToy = { 
            
            "category":category,
            "subCategory":SubCategory,
            "postedBy":postedBy,
            "name":name,
            "price":price,
            "picture":picture,
            "rating":rating,
            "quantity":quantity,
            "details":details


        }
        console.log(newToy)

        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added')
                }
            })

    }


    return (
        <div className=' flex justify-center'>
            <form action="" onSubmit={handleAddToy}>
                {/* form row */}
                <div className='flex mb-8 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <label className="input-group ">

                            <input defaultValue={'car'} type="text" placeholder="Toy name" name='name' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Price" defaultValue={'7'} name='price' className="input w-full input-bordered" />
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

                            <input type="text" placeholder="Category" defaultValue={'vehicle'} name='category' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">sub-category</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="sub-category" defaultValue={'car'} name='SubCategory' className="input w-full input-bordered" />
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
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Rating" defaultValue={'4.2'} name='rating' className="input w-full input-bordered" />
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

                            <input type="text" placeholder="Photo URL" defaultValue={'https://media.istockphoto.com/id/1024366752/photo/red-toy-car-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fruDDTOFbc6zDsqUoftbi3G78GkkSrE5ewPnij72jU4='} name='url' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group ">

                            <input type="number" placeholder="Rating" defaultValue={1} name='quantity' className="input w-full input-bordered" />
                        </label>
                    </div>

                </div>
                <div className='flex mb-8 '>

                    
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Details" defaultValue={'No details available'} name='details' className="input w-full  input-bordered" />
                        </label>
                    </div>

                </div>
                <div>
                    <input type="submit" className="btn btn-block" />

                </div>
            </form>
        </div>
    );
};

export default AddToy;