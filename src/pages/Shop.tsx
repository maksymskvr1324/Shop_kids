import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/productCard";
import Basket from "../components/basket";
import { Product, CartItem } from "../components/type"; 

export default function Shop() {
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://658574c2022766bcb8c8adf9.mockapi.io/Home");
        const data = await response.json();
        setShop(data);
        console.log(data);
      } catch (error) {
        console.error("Помилка отримання даних:", error);
      }
    };

    fetchData();
  }, []);

  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

  return (
    <>
      <Navbar />
      <div className="shop-title">Колекція магазину</div>
      <div className="main-shop-content">
        <div className="block-cards">
          {shop.map((item, index) => (
            <div key={index} className="cards">
              <Card img={item.img} name={item.name} price={item.price} />
            </div>
          ))}
        </div>
      </div>
      <Basket cartItems={cartItems} />
      <Footer />
    </>
  );
}
