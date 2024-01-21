import React, { useState } from 'react';

const Basket = () => {
  const [isBasketVisible, setBasketVisible] = useState(true);

  const closeBasket = () => {
    setBasketVisible(false);
  };

  return (
    <>
      {isBasketVisible && (
        <div className="sidebar">
          <span className="arrow" onClick={closeBasket}>
            <svg className='close' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
            </svg>
          </span>
          <h2>sidebar</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ea
            magni deleniti autem eos reprehenderit similique architecto unde est
            hic quod quisquam cum, libero possimus praesentium atque at eligendi
            rem!
          </p>
        </div>
      )}
    </>
  );
};

export default Basket;