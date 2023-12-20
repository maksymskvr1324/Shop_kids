import React from "react";

export function Footer(){
    return (
        <footer>
      <div className="container">
        <div className="footer-title"></div>

        <div className="footer-info-block">
          <div className="pages">
            <h3>Pages</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="more-info">
            <h3>More Info</h3>
            <p>Explore our blog for the latest updates.</p>
          </div>
        </div>

        <div className="footer-form-block">
          <div className="footer-subtitle">Subscribe to Our Newsletter</div>
          <div className="footer-form">
            <label htmlFor="email" className="inp-label">Email:</label>
            <input type="email" id="email" className="inp" placeholder="Enter your email" />
            <button type="submit" className="btn-inp">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>

    )
}