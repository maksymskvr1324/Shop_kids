import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/productCard";
import { Footer } from "../components/footer";


import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { Link } from 'react-router-dom';

interface Product {
    img: string;
    name: string;
    price: string;
}

const fadeImages = [
    {
        url: 'https://static.wixstatic.com/media/45d10e_8ea5dbebfc474db6bcad74e213948943~mv2_d_3593_1750_s_2.jpg/v1/fill/w_1903,h_651,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_8ea5dbebfc474db6bcad74e213948943~mv2_d_3593_1750_s_2.jpg',
    },
    {
        url: 'https://static.wixstatic.com/media/45d10e_f3d7ac0b5eb048e1a5a80f1e0e25e4b9~mv2_d_3953_1750_s_2.jpg/v1/fill/w_1903,h_651,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_f3d7ac0b5eb048e1a5a80f1e0e25e4b9~mv2_d_3953_1750_s_2.jpg',
    },
    {
        url: 'https://static.wixstatic.com/media/45d10e_66981a9a17a24738b0a34e6616de9da3~mv2_d_5740_2763_s_4_2.jpg/v1/fill/w_1903,h_651,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_66981a9a17a24738b0a34e6616de9da3~mv2_d_5740_2763_s_4_2.jpg',
    }
]

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

export default function Home(){

    const [shop, setShop] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://658574c2022766bcb8c8adf9.mockapi.io/Home');
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
        <div className="image-slider">
            <div className="slide-container">
                <Fade>
                    {fadeImages.map((fadeImages, index) => (
                    <div key={index}>
                        <img style={{ width: '100%' }} src={fadeImages.url} />
                    </div>
                    ))}
                </Fade>
            </div>
        </div>
        <div className="cards-slider-title">New Arrivals</div>
        <div className="slide-container">
            <Slide {...properties} slidesToScroll={1} slidesToShow={4} indicators={true}>
                {shop.map((item, index) => (
                    <Card key={index} img={item.img} name={item.name} price={item.price} />
                ))}
            </Slide>
        </div>
        <Link to="/Shop"><div className="shop-all-button">Shop All</div></Link>
        <Footer/>
        </>
    )
}