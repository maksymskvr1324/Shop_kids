import React from "react";

export function Footer(){
    return (
        <footer className="footer">
            <div className="logo-footer">Kids Shop</div>
            <div className="footer-content">
                <div className="">
                    <ul className="">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="icons">
                    <div className="icon">j</div>
                    <div className="icon">j</div>
                    <div className="icon">j</div>
                </div>
                <div className="other">
                    <ul className="">
                        <li><a href="/">1</a></li>
                        <li><a href="/">2</a></li>
                        <li><a href="/">3</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}