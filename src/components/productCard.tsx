import React from "react";

export const Card = (props : any) => {
    const { img, name, price } = props;
  
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
                        <div className="card-button">Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
  };