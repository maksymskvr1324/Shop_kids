import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/productCard";
import { Footer } from "../components/footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';

interface Product {
    img: string;
    name: string;
    price: string;
}

export default function Home(){

    const [shop, setShop] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://658574c2022766bcb8c8adf9.mockapi.io/Shop');
            const data = await response.json();
            setShop(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <>
        <Navbar/>
        <div className="main-swiper">
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar]}
                // autoplay
                slidesPerView={4}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                    <div className="slider-wrap">
                        {shop.map((item, index) => (
                            <SwiperSlide>
                                <Card key={index} img={item.img} name={item.name} price={item.price} />
                            </SwiperSlide>
                        ))}
                    </div>
            </Swiper>
        </div>
        <Footer/>
        </>
    )
}