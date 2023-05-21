import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SpecialOffer = ({ toy }) => {
    const toyOffer = toy.slice(0, 5)
    console.log('toyoffer', toyOffer)

    return (
        <>
            <div data-aos="zoom-in">
                <h1 className='text-center text-secondary text-3xl font-bold py-12'>Special Offers</h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide><div className="flex justify-center items-center">
                <div className="card w-96  glass">
                    <figure><img className="h-72 w-72 rounded-full" src={toyOffer[0]?.picture} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{toyOffer[0]?.name}</h2>
                        <p>price:{toyOffer[0]?.price} $ <span>Sale-30%</span></p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div></div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center">
                <div className="card w-80 glass">
                    <figure><img className="h-72 w-72 rounded-full" src={toyOffer[1]?.picture} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{toyOffer[1]?.name}</h2>
                        <p>price:{toyOffer[1]?.price} $ <span className="text-warning">--on Sale-30%</span></p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div></div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center">
                <div className="card w-80 glass">
                    <figure><img className="h-72 w-72 rounded-full" src={toyOffer[2]?.picture} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{toyOffer[2]?.name}</h2>
                        <p>price:{toyOffer[2]?.price} $ <span className="text-warning">--on Sale-30%</span></p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div></div></SwiperSlide>
                


            </Swiper>
        </>
    );
};

export default SpecialOffer;