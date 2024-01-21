import React from "react";

export const Card = (props : any) => {
    const { img, name, price } = props;
    const Add_to_cart = () => {
        const Basket_bottom = document.querySelector('.sidebar_bottom');
        if (Basket_bottom) {
            const Basket_cart = document.createElement('div');
            const Basket_cart_img = document.createElement('img');
            const Basket_cart_name = document.createElement('p');
            const Basket_cart_price_wrap = document.createElement('i');
            const Basket_cart_price = document.createElement('p');
            const Basket_cart_close = document.createElement('span');
            
            Basket_cart.className = 'basket_cart';
            Basket_cart_img.src = img;
            Basket_cart_name.textContent = name;
            Basket_cart_price.textContent = price;
            Basket_cart_close.textContent = 'X';
            Basket_cart_close.className = 'close_bascet_cart';

            Basket_cart_price_wrap.appendChild(Basket_cart_price);
            Basket_cart.appendChild(Basket_cart_img);
            Basket_cart.appendChild(Basket_cart_name);
            Basket_cart.appendChild(Basket_cart_price_wrap);
            Basket_cart.appendChild(Basket_cart_close);


            Basket_bottom.appendChild(Basket_cart);
        } else {
            console.error('Елемент з класом .sidebar_bottom не знайдено');
        }    
    }
    return (
        <div className="section">
            <div className="main">
                <div className="card-container">
                    <div className="card-img-wrap">
                        <img src={img} alt={name} className="card-img" />
                    </div>
                    <div className="card-content">
                        <div className="cadr-name"><a href="#"><span>{name}</span></a></div>
                        <div className="card-price"><a href="#"><span>{price}</span></a></div>
                        <div className="card-button" onClick={Add_to_cart}>Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
  };