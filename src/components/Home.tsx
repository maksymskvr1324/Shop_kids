import React from 'react'

export  function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Kids Shop</div>
        <ul className="nav-links">
          <li><a className='active' href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className=""></div>
    </nav>
  )
}

export function ShortCart(){
  return(
    <div className="cart">
      <div className="image">
        <img src="" alt="image-cart" className="img" />
      </div>
      <div className="description-cart">
        <div className="name-cart">name</div>
        <div className="price-cart">price</div>
      </div>
      <div className="button-cart">
        <div className="btn">Add to cart</div>
      </div>
    </div>
  )
}