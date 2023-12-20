import React from 'react'

export  function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"><a href="/">Kids Shop</a></div>
        <ul className="nav-links">
          <li><a className='active' href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/contact">Contact</a></li>
          <div className='navbar-icon'> 
            <div className='shop'><span className="material-symbols-outlined">shopping_cart</span></div>
            <div className='account'><span className="material-symbols-outlined">account_circle</span></div>
          </div>
        </ul>
      </div>
    </nav>
  )
}