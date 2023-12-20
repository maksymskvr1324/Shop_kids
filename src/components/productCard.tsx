import React from "react";

export function Card(){
    return (
        <div className="section">
            <div className="main">
                <div className="card-container">
                    <div className="card-img-wrap">
                        <img src={require('./img/card_1.webp')} alt="" className="card-img" />
                    </div>
                    <div className="card-content">
                        <div className="cadr-name">i`m a product</div>
                        <div className="card-price">$19.00</div>
                        <div className="card-button">Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}