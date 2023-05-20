import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

SwiperCore.use([Navigation, Pagination, Autoplay]);


const Testimonilas = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='w-11/12 md:w-4/5 mx-auto rounded '>
            <div className=" py-10 px-4">
                <div data-aos="zoom-in-up">
                    <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
                        See what our users say
                    </h2>
                </div>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="bg-gray-100 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2  text-center">
                            <div className='my-8 flex flex-col justify-center items-center'>
                                <img className='rounded-full  w-[200px] mx-auto' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
                                <p className="text-gray-700 text-lg font-medium">
                                    John Calleo
                                </p>
                            </div>
                            <p className="text-gray-800 mb-4 text-lg w-4/5 text-center">
                                "Toy-Place is a top-notch toy selling website that caters to children of all ages. Their vast collection boasts a diverse range of high-quality toys, from timeless classics to cutting-edge trends. With its user-friendly interface, navigating the website is a breeze, allowing you to find your desired toys quickly. all your toy needs. Explore their virtual aisles and delight in the joy of finding the perfect toy for your little ones."
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-gray-100 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2  text-center">
                            <div className='my-8 flex flex-col justify-center items-center'>
                                <img className='rounded-full  w-[200px] mx-auto' src="https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png" alt="" />
                                <p className="text-gray-700 text-lg font-medium">
                                    Jon Smith
                                </p>
                            </div>
                            <p className="text-gray-800 mb-4 text-lg w-4/5 text-center">

                                "Toy-Place is a paradise for toy enthusiasts, offering an extensive array of top-notch toys for kids. From educational toys to interactive games and collectibles, their website is a treasure trove of endless fun. With a sleek and intuitive interface, browsing and  Toy-Place the ultimate go-to destination for fulfilling all your toy desires. Embark on an exciting journey of play and imagination with Toy-Place!"
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-gray-100 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 text-center">
                            <div className='my-8 flex flex-col justify-center items-center'>
                                <img className='rounded-full  w-[200px] mx-auto' src="https://www.kingrosales.com/wp-content/uploads/2018/05/king-rosales-profile-photo-square.jpg" alt="" />
                                <p className="text-gray-700 text-lg font-medium">
                                    Alex Hary
                                </p>
                            </div>
                            <p className="text-gray-800 mb-4 text-lg w-4/5 text-center">

                                "Toy-Place is a delightful online toy emporium that brings joy to children of all ages. Their captivating selection features an incredible variety of toys, from imaginative playsets to mind-stimulating puzzles and everything in between. With its user-friendly website design,  customer service ensure a hassle-free experience. Discover the magic of play at Playtime Central, where cherished childhood memories are made."
                            </p>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonilas;