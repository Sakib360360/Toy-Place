import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys,setMyToys]= useState([])
    useTitle('Toy-Place|my-toys')
    useEffect(()=>{
        fetch(`https://toy-place-server.vercel.app/myToys/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyToys(data)
        })
    },[])

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
                        if(data.deletedCount>0){
                            Swal.fire('Deleted!', '', 'success')
                            const newMyToys = myToys.filter(toy=>toy._id!==id)
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
    const handleSortLowestToHighest = () =>{
        setMyToys(sortedToysLowestToHighest)
    }
    const handleSortHighestToLowest = () =>{
        setMyToys(sortedToysHighestToLowes)
    }
    console.log(myToys)
    return (
        <div className='max-w-6xl'>
            <div className='flex justify-center items-center my-8'>
                <h1 className='px-2'>Sort by price</h1>
                <button onClick={handleSortLowestToHighest} className='px-2 border-2 py-1'>Lowest to Highest</button>
                <button onClick={handleSortHighestToLowest} className='px-2 border-2 py-1'>Highest to Lowest</button>
            </div>
            <div className='flex flex-col justify-center gap-8'>
                {
                    myToys.map((toy,index)=><MyToysCard handleDelete={handleDelete} key={index} toy={toy}></MyToysCard>)
                }
            </div>
        </div>
    );
};

export default MyToys;