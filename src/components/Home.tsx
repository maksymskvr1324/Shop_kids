import React, { useState, useEffect } from "react";
import { Card } from "./productCard";

interface Product {
  img: string;
  name: string;
  price: string;
}

export const Page: React.FC = () => {


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
  }, []); // Передача пустого масиву визначає, що цей ефект викликається лише під час монтування компоненту.

  return (
    <div className="cards-slider">
      {shop.map((item, index) => (
        <Card key={index} img={item.img} name={item.name} price={item.price} />
      ))}
    </div>
  );
};
