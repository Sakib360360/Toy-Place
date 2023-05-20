import React, { useEffect, useState } from 'react';
import Toys from '../Home/Toys';
import useTitle from '../../Hooks/useTitle';
import AllToysTabular from './AllToysTabular';

const AllToy = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState(null)
    const [loading,setLoading] = useState(true)
    useTitle('Toy-Place|all-toy')
    const [searchedToy, setSearchedToy] = useState([])
    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    console.log(searchText)

    useEffect(() => {
        fetch(`https://toy-place-server.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                searchText.length>0 && setAllToys(data)
                if(data.length>0){
                    setLoading(false)
                }
            })
    }, [searchText])
    useEffect(() => {
        fetch('https://toy-place-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {

                setAllToys(data)
                if(data.length>0){
                    setLoading(false)
                }
            })
    }, [])
    
    useEffect(() => {
        fetch('https://toy-place-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {

                searchText.length <=0 && setAllToys(data)
                if(data.length>0){
                    setLoading(false)
                }
            })
    }, [searchText])
    return (
        <div>
            {/* search */}
            <div className='flex justify-center mt-8'>
                <div className="font-sans text-black bg-white flex items-center justify-center">
                    <div className="border rounded overflow-hidden flex">
                        <input onChange={handleSearch} type="text" name='searchText' className="px-4 py-2" placeholder="Search your favorite toy" />
                        <button className="flex items-center justify-center px-4 border-l">
                            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* loading state */}
            {
                loading && <div className='flex justify-center items-center my-8'><progress className="progress w-56"></progress></div>
            }
            {/* all toys showing */}
            <div className="overflow-x-auto mt-8 w-full mb-8">

                <table className="table w-full border-b-2">

                    <thead>
                        <tr>

                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Price</th>
                            
                            <th>Subcategory</th>
                            <th>Quantity</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(data => <AllToysTabular key={data._id} data={data}></AllToysTabular>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToy;



