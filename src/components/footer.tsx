import React from "react";

export function Footer(){
    return (
        <footer>
          <div className="border"></div>
          <p className="footer-title">happy kids</p>
          <div className="info">
            <div className="pages">
              <ul className="footer-pages-links">
                <li><a className='active' href="/Home">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/About_us">About us</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </div>
            <div className="contact">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                  <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                </svg>
              </span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
                  <path d="M 16.09375 4 C 11.01675 4 6 7.3833281 6 12.861328 C 6 16.344328 7.9584844 18.324219 9.1464844 18.324219 C 9.6364844 18.324219 9.9199219 16.958266 9.9199219 16.572266 C 9.9199219 16.112266 8.7460938 15.131797 8.7460938 13.216797 C 8.7460938 9.2387969 11.774359 6.4199219 15.693359 6.4199219 C 19.063359 6.4199219 21.556641 8.3335625 21.556641 11.851562 C 21.556641 14.478563 20.501891 19.40625 17.087891 19.40625 C 15.855891 19.40625 14.802734 18.516234 14.802734 17.240234 C 14.802734 15.370234 16 13.558906 16 11.628906 C 16 8.3529063 11.462891 8.94725 11.462891 12.90625 C 11.462891 13.73725 11.5665 14.657063 11.9375 15.414062 C 11.2555 18.353063 10 23.037406 10 26.066406 C 10 27.001406 10.133656 27.921422 10.222656 28.857422 C 10.390656 29.045422 10.307453 29.025641 10.564453 28.931641 C 13.058453 25.517641 12.827078 24.544172 13.955078 20.076172 C 14.564078 21.234172 16.137766 21.857422 17.384766 21.857422 C 22.639766 21.857422 25 16.736141 25 12.119141 C 25 7.2061406 20.75475 4 16.09375 4 z"></path>
                </svg>
              </span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </span>

            </div>
            <div className="more_info">
            <ul className="footer-pages-links">
                <li><a className='active' href="/Home">Shipping & Returns</a></li>
                <li><a href="/Shop">Store Policy</a></li>
                <li><a href="/About_us">Payment Methods</a></li>
                <li><a href="/Contact">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-form">
            <p className="footer-subtitle">Join Our Mailing List</p>
            <div className="form-inp">
              <div className="input">
                <input type="text" placeholder="Enter your email here*"/>
              </div>
              <div className="button-input">
                <button>Subscribe Now</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2023 Your Company. All rights reserved.
          </div>
        </footer>

    )
}