import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/productCard";
import { Filter } from "../components/filter";

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
                <div className="filter">
                {/* <Filter>
                    
                </Filter> */}
                </div>
                <div className="block-cards">
                {
                shop.map((item, index) => (
                    <div key={index} className="cards">
                        {item.map((element, key) => (
                            <div key="key" className="card">
                                <Card img={element.img} name={element.name} price={element.price}/>
                            </div>
                        ))}
                    </div>
                ))
                }
                </div>
            </div>
            <Footer/>
        </>
    )
}