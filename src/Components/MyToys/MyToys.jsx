import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys,setMyToys]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyToys(data)
        })
    },[])
    console.log(myToys)
    return (
        <div className='max-w-6xl'>
            <div className='flex justify-center flex-wrap gap-8'>
                {
                    myToys.map((toy,index)=><MyToysCard key={index} toy={toy}></MyToysCard>)
                }
            </div>
        </div>
    );
};

export default MyToys;