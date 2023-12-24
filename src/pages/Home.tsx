import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/productCard";
import { Footer } from "../components/Footer";

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

    return(
        <>
            <Navbar/>
            <div className="cards-slider">
                {shop.map((item, index) => (
                    <Card key={index} img={item.img} name={item.name} price={item.price} />
                ))}
                <div>
                    if (shop.length === 6){
                    }
                    <p>{`Загальна кількість товарів: ${shop.length}`}</p>
                </div>
            </div>  
            <Footer/>
        </>
    )
}