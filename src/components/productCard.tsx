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
                        <div className="cadr-name"><a href="#"><span>i`m a productt</span></a></div>
                        <div className="card-price"><a href="#"><span>$19.00</span></a></div>
                        <div className="card-button">Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}