import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Toys from './Toys';
import './Home.css'
import Bannar from './Bannar';
import useTitle from '../../Hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from '../Testimonials/Testimonials';
import GallerySection from '../Gallery/GallerySection';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import { Link } from 'react-router-dom';
AOS.init();

const Home = () => {

    const [allToys, setAllToys] = useState([])
    const [subCategoriesToys, setSubcategoriesToys] = useState([])
    useTitle('Toy-Place|home')
    const [loadingg, setLoadingg] = useState(true)
    const [limit, setLimit] = useState(20)
    const [toyBycategory, setToyByCategory] = useState([])
    const [open, setOpen] = useState(true)

    // const categoriesList = [];
    const categoriesList = new Set();
    const subCategoriesList = new Set()

    useEffect(() => {

        fetch(`https://toy-place-server.vercel.app/allToys?limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setAllToys(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [limit]);


    allToys.forEach(object => categoriesList.add(object.category));
    toyBycategory.forEach(object => subCategoriesList.add(object.subCategory));

    const uniqueCategoriesArray = Array.from(categoriesList);
    const uniqueSubCategoriesArray = Array.from(subCategoriesList);

    const handleSubCategory = (name) => {
        console.log(name)
        fetch(`https://toy-place-server.vercel.app/allToysBy/${name}`)
            .then(res => res.json())
            .then(data => {

                if (data) {
                    setLoadingg(false)
                }
                setToyByCategory(data)
            })
        console.log(toyBycategory)
    }
    // toys by subcategories
    const handleSubCategoryToys = (name) => {
        console.log(name)
        fetch(`https://toy-place-server.vercel.app/allToysBySub/${name}`)
            .then(res => res.json())
            .then(data => {

                if (data) {
                    setLoadingg(false)
                }
                setSubcategoriesToys(data)
            })



        // console.log(uniqueSubCategoriesArray)
    }

    const handleFocus = (event) => {
        event.target.style.backgroundColor = '#dfe6ed';
    };

    const handleBlur = (event) => {
        event.target.style.backgroundColor = '#FFFFFF';
    };
    const handleShowAll = () => {
        setLimit(100000)
        setOpen(!open)
    }
    return (
        <>

            <div >
                <Bannar></Bannar>
            </div>
            {/* gallery */}
            <div className='overflow-x-hidden md:overflow-visible'>
                <GallerySection></GallerySection>
            </div>
            <div className=' my-12 '>
                <div className='overflow-x-hidden'>
                    <h1 data-aos="zoom-in-down" className=" text-secondary font-bold text-4xl mb-12 text-center">Shop by <br /> Category & Subcategory</h1>
                </div>
                <div className='flex max-w-5xl overflow-x-hidden flex-wrap '>
                    {
                        uniqueCategoriesArray.map((item, index) => {
                            return <div key={index}>
                                <button onFocus={handleFocus}
                                    onBlur={handleBlur} onClick={() => handleSubCategory(item)} className='border-t-2 border-l-2 px-2 border-r-2 ml-2 rounded-t-lg'>{item}</button>
                            </div>
                        })
                    }

                </div>
                <div>
                    <hr />
                </div>
                {/* subcategory */}

                <div className='flex max-w-5xl flex-wrap mt-4'>

                    {
                        uniqueSubCategoriesArray.map((item, index) => {
                            return <>
                                <button onFocus={handleFocus}
                                    onBlur={handleBlur} key={index} onClick={() => handleSubCategoryToys(item)} className='border-t-2 border-l-2 px-2 border-r-2 rounded-t-lg ml-2'>{item}</button>
                            </>
                        })
                    }

                </div>
                {
                    uniqueSubCategoriesArray.length > 0 ? <div>
                        <hr />
                    </div> : <></>
                }

                {/* data showing */}
                <div>
                    <div className='flex flex-wrap justify-center mx-auto mt-24 gap-8 md:gap-24'>

                        {
                            subCategoriesToys.length < 1 && toyBycategory.length < 1 ? allToys.map(data => <Toys key={data._id} data={data}></Toys>) : <></>
                        }
                    </div>

                    <div className='flex flex-wrap justify-center mx-auto mt-24 gap-8 md:gap-24'>
                        {
                            subCategoriesToys.length > 0 ? subCategoriesToys.map(data => <Toys key={data._id} data={data}></Toys>) : toyBycategory.map(data => <Toys key={data._id} data={data}></Toys>)

                        }
                    </div>
                </div>
                {/* button for show all */}
                <div className='flex justify-center my-8'>
                    <button onClick={handleShowAll} className='btn btn-outline btn-secondary'><Link to='/allToys'>Show All</Link></button>


                </div>
                {/* special offer */}
                <SpecialOffer toy={allToys}></SpecialOffer>
                {/* testimonials */}


                <div className='mt-8 mb-8 h-96 mx-auto flex justify-center'>
                    <Testimonials></Testimonials>
                </div>


            </div>



        </>
    );
};

export default Home;