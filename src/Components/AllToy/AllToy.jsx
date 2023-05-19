import React, { useEffect, useState } from 'react';
import Toys from '../Home/Toys';

const AllToy = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {

                setAllToys(data)
            })
    }, [])
    return (
        <div>
            <div className='flex flex-wrap justify-center mx-auto mt-24 gap-8 md:gap-24'>
                {
                    allToys.map(data => <Toys key={data._id} data={data}></Toys>)
                }
            </div>
        </div>
    );
};

export default AllToy;