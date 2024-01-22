import React from "react";

export const Card = (props: any) => {
  const { img, name, price } = props;

  const Add_to_cart = () => {
    const cardInfo = {
      img,
      name,
      price,
    };

    const existingData = JSON.parse(localStorage.getItem("cartItems") || "[]");
    existingData.push(cardInfo);

    localStorage.setItem("cartItems", JSON.stringify(existingData));
  };

  return (
    <div className="section">
      <div className="main">
        <div className="card-container">
          <div className="card-img-wrap">
            <img src={img} alt={name} className="card-img" />
          </div>
          <div className="card-content">
            <div className="card-name">
                <span>{name}</span>
            </div>
            <div className="card-price">
                <span>{price}</span>
            </div>
            <div className="card-button" onClick={Add_to_cart}>
              Додати в корзину
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

