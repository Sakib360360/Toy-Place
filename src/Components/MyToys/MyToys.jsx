import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [message,setMessage] = useState(null)
    const [loading,setLoading] = useState(true)
    useTitle('Toy-Place|my-toys')
    useEffect(() => {
        fetch(`https://toy-place-server.vercel.app/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
                setTimeout(() => {
                    if(data?.length>0){
                        setLoading(false)
                        setMessage('Here are your products!')
                    }
                }, 100);
                if(myToys.length<=0){
                    setLoading(false)
                    setMessage('Sorry you hanve not upload any product here. Please Add your product.')
                }
            })
    }, [])
    const handleFocus = (event) => {
        event.target.style.backgroundColor = '#dfe6ed';
    };

    const handleBlur = (event) => {
        event.target.style.backgroundColor = '#FFFFFF';
    };

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
                fetch(`https://toy-place-server.vercel.app/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',

                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', '', 'success')
                            const newMyToys = myToys.filter(toy => toy._id !== id)
                            setMyToys(newMyToys)
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire('Try again', '', 'info')
            }
        })
    }
    const sortedToysLowestToHighest = [...myToys].sort((a, b) => a.price - b.price);
    const sortedToysHighestToLowes = [...myToys].sort((a, b) => b.price - a.price);
    const handleSortLowestToHighest = () => {
        setMyToys(sortedToysLowestToHighest)
    }
    const handleSortHighestToLowest = () => {
        setMyToys(sortedToysHighestToLowes)
    }
    console.log(myToys)
    return (
        <div className='max-w-6xl'>
            <div className='flex justify-center items-center my-8'>
                <h1 className='px-2'>Sort by price</h1>
                <button onFocus={handleFocus}
                    onBlur={handleBlur} onClick={handleSortLowestToHighest} className='px-2 border-2 py-1'>Lowest to Highest</button>
                <button onFocus={handleFocus}
                    onBlur={handleBlur} onClick={handleSortHighestToLowest} className='px-2 border-2 py-1'>Highest to Lowest</button>
            </div>
            {/* loading state */}
            {
                loading && <div className='flex justify-center items-center my-8'><progress className="progress w-56"></progress></div>
            }
            {
                message && <div className='flex justify-center items-center my-8'><p className='text-warning text-2xl font-semiboldsemi w-1/2 text-center'>{message}</p></div>
            }
            <div className="overflow-x-auto w-full mb-8">

                <table className="table w-full border-b-2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys?.map((toy, index) => <MyToysCard handleDelete={handleDelete} key={index} toy={toy} index={index}></MyToysCard>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyToys;