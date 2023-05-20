import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Bannar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Bannar = () => {
    return (
        <div>
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
                <SwiperSlide ><div className="relative">
                    <img className="h-[90vh] w-full" src="https://media.sketchfab.com/models/2d9dc2a6b975476f852e58ff4381ee9f/thumbnails/6a43509178be4974820068bb6d7d01c4/a0f06b5f95c8464886d47510c87a9f36.jpeg" alt="" />
                    <div className="absolute top-1/3 left-12 space-y-3">
                        <h2 className="text-2xl text-primary font-semibold title">Hot Collection</h2>
                        <h1 className=" text-secondary title-l text-center font-bold">Toy for All</h1>
                        <p className="text-2xl">Get upto 25% off!!!</p>

                        <Link to='/allToys'><button className="btn  btn-warning">See Collection</button></Link>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="relative">
                    <img className="h-[90vh] w-full" src="https://c0.wallpaperflare.com/preview/265/849/245/toys.jpg" alt="" />
                    <div className="absolute top-1/3 left-12 space-y-3">
                        <h2 className="text-2xl text-primary font-semibold title">Hot Collection</h2>
                        <h1 className=" text-secondary title-l text-center font-bold">Toy for All</h1>
                        <p className="text-2xl">Get upto 25% off!!!</p>

                        <Link to='/allToys'><button className="btn  btn-warning">See Collection</button></Link>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="relative">
                    <img className="h-[90vh] w-full" src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    <div className="absolute top-1/3 left-12 space-y-3">
                        <h2 className="text-2xl text-primary font-semibold title">Hot Collection</h2>
                        <h1 className=" text-secondary title-l text-center font-bold">Toy for All</h1>
                        <p className="text-2xl">Get upto 25% off!!!</p>

                        <Link to='/allToys'><button className="btn  btn-warning">See Collection</button></Link>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="relative">
                    <img className="h-[90vh] w-full" src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    <div className="absolute top-1/3 left-12 space-y-3">
                        <h2 className="text-2xl text-primary font-semibold title">Hot Collection</h2>
                        <h1 className=" text-secondary title-l text-center font-bold">Toy for All</h1>
                        <p className="text-2xl">Get upto 25% off!!!</p>

                        <Link to='/allToys'><button className="btn  btn-warning">See Collection</button></Link>
                    </div></div></SwiperSlide>
                <SwiperSlide><div className="relative">
                    <img className="h-[90vh] w-full" src="https://images.unsplash.com/photo-1592004604827-63bab259629f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    <div className="absolute top-1/3 left-12 space-y-3">
                        <h2 className="text-2xl text-primary font-semibold title">Hot Collection</h2>
                        <h1 className=" text-secondary title-l text-center font-bold">Toy for All</h1>
                        <p className="text-2xl">Get upto 25% off!!!</p>

                        <Link to='/allToys'><button className="btn  btn-warning">See Collection</button></Link>
                    </div></div></SwiperSlide>
                

                <SwiperSlide><div className="relative">
                    <img className="h-[90vh] w-full" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    <div className="absolute top-1/3 left-12 space-y-3">
                        <h2 className="text-2xl text-primary font-semibold title">Hot Collection</h2>
                        <h1 className=" text-secondary title-l text-center font-bold">Toy for All</h1>
                        <p className="text-2xl">Get upto 25% off!!!</p>

                        <Link to='/allToys'><button className="btn  btn-warning">See Collection</button></Link>
                    </div></div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Bannar;