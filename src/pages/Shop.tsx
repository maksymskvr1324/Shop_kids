import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/productCard";

interface Product {
    img: string;
    name: string;
    price: string;
}



export default function Shop(){

    const [shop, setShop] = useState<Product[][]>([])

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
            <div className="shop-title">Shop Collection</div>
            <div className="main-shop-content">
                <div className="filter"></div>
                <div className="block-cards">
                {/* <p>{JSON.stringify(shop[1])}</p> */}
                    {shop.map((item, index) => (
                        <div key={index}>
                            {item.map((element) => (
                                <div>{JSON.stringify(element)}</div>
                            ))}                        
                        </div>
                        // <Card key={index} img={item.img} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}