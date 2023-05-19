import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys,setMyToys]= useState([])
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
    console.log(myToys)
    return (
        <div className='max-w-6xl'>
            <div className='flex flex-col justify-center gap-8'>
                {
                    myToys.map((toy,index)=><MyToysCard handleDelete={handleDelete} key={index} toy={toy}></MyToysCard>)
                }
            </div>
        </div>
    );
};

export default MyToys;