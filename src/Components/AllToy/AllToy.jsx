import React, { useEffect, useState } from 'react';
import Toys from '../Home/Toys';

const AllToy = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText,setSearchText] = useState(null)
    const [searchedToy,setSearchedToy] = useState([])
    const handleSearch = (e) =>{
        setSearchText(e.target.value)
    }
    console.log(searchText)

    useEffect(()=>{
        fetch(`https://toy-place-server.vercel.app/toySearch/${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            setSearchedToy(data)
        })
    },[searchText])
    console.log(searchedToy)
    useEffect(() => {
        fetch('https://toy-place-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {

                setAllToys(data)
            })
    }, [])
    return (
        <div>
            {/* search */}
            <div className='flex justify-center mt-8'>
                <div className="font-sans text-black bg-white flex items-center justify-center">
                    <div className="border rounded overflow-hidden flex">
                        <input onChange={handleSearch}  type="text" name='searchText' className="px-4 py-2" placeholder="Search your favorite toy" />
                            <button className="flex items-center justify-center px-4 border-l">
                                <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                            </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center mx-auto mt-24 gap-8 md:gap-24'>
                {
                    allToys.map(data => <Toys key={data._id} data={data}></Toys>)
                }
            </div>
        </div>
    );
};

export default AllToy;