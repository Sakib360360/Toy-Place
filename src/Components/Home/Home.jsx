import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Toys from './Toys';
import { data } from 'autoprefixer';

const Home = () => {

    const [allToys, setAllToys] = useState([])
    const [subCategoriesToys, setSubcategoriesToys] = useState([])
    const [loadingg, setLoadingg] = useState(true)
    const [toyBycategory, setToyByCategory] = useState([])

    // const categoriesList = [];
    const categoriesList = new Set();
    const subCategoriesList = new Set()


    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {

                setAllToys(data)
            })
    }, [])
    allToys.forEach(object => categoriesList.add(object.category));
    toyBycategory.forEach(object => subCategoriesList.add(object.subCategory));

    const uniqueCategoriesArray = Array.from(categoriesList);
    const uniqueSubCategoriesArray = Array.from(subCategoriesList);
    // console.log(uniqueCategoriesArray)

    // console.log(allToys)

    const handleSubCategory = (name) => {
        console.log(name)
        fetch(`http://localhost:5000/allToysBy/${name}`)
            .then(res => res.json())
            .then(data => {

                if (data) {
                    setLoadingg(false)
                }
                setToyByCategory(data)
            })

    }
    // toys by subcategories
    const handleSubCategoryToys = (name) => {
        console.log(name)
        fetch(`http://localhost:5000/allToysBySub/${name}`)
            .then(res => res.json())
            .then(data => {

                if (data) {
                    setLoadingg(false)
                }
                setSubcategoriesToys(data)
            })

        

        // console.log(uniqueSubCategoriesArray)
    }
    return (
        <>


            <div className=' my-12 '>
                <h1>Categories </h1>
                <div className='flex max-w-5xl '>
                    {
                        uniqueCategoriesArray.map(item => {
                            return <>
                                <button onClick={() => handleSubCategory(item)} className='btn ml-2 rounded-t-lg'>{item}</button>
                            </>
                        })
                    }

                </div>
                <div>
                    <hr />
                </div>
                {/* subcategory */}
                <div className='flex max-w-5xl  mt-4'>
                    {
                        uniqueSubCategoriesArray.map((item,index) => {
                            return <>
                                <button key={index} onClick={() => handleSubCategoryToys(item)} className='btn ml-2'>{item}</button>
                            </>
                        })
                    }

                </div>
                {
                    uniqueSubCategoriesArray.length>0 ? <div>
                    <hr />
                </div> : <></>
                }
                
                {/* data showing */}
                <div>
                    <h1>Your selected toys</h1>
                    <div className='flex flex-wrap justify-center mx-auto mt-24 gap-8 md:gap-24'>
                        {
                           subCategoriesToys.length>0 ? subCategoriesToys.map(data=><Toys key={data._id} data={data}></Toys>) : toyBycategory.map(data=><Toys key={data._id} data={data}></Toys>)
                           
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;