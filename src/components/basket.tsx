  import React, { useState, useEffect } from 'react';

  interface CartItem {
    img: string;
    name: string;
    price: number;
  }

  interface BasketProps {
    cartItems: CartItem[][];
  }

  const Basket: React.FC<BasketProps> = ({ cartItems }) => {
    const [isBasketVisible, setBasketVisible] = useState(true);
    const [parsedCartItems, setParsedCartItems] = useState<CartItem[][] | null>(null);

    useEffect(() => {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        try {
          const parsedCartItems = JSON.parse(storedCartItems);

          if (Array.isArray(parsedCartItems)) {
            // Якщо parsedCartItems є масивом, тоді встановлюємо його в стан
            setParsedCartItems(parsedCartItems);
          } else {
            // Якщо parsedCartItems не є масивом, виводимо повідомлення про помилку
            console.error('Неправильний формат для cartItems:', parsedCartItems);
          }
        } catch (error) {
          console.error('Помилка розбору cartItems:', error);
        }
      }
    }, []);

    const closeBasket = () => {
      setBasketVisible(false);
    };

    return (
      <>
        {isBasketVisible && (
          <div className="sidebar">
            <span className="arrow" onClick={closeBasket}>
              <div className='sidebar_top'>
                <svg className='close' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                  <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
                </svg>
                <p>Кошик</p>
              </div>
              <div className='sidebar_bottom'>        
              {parsedCartItems ? (
                  parsedCartItems.map((items, index) => (
                    Array.isArray(items) ? (
                      <div key={index}>
                        {items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Виводимо повідомлення про помилку, якщо items не є масивом
                      <p key={index}>Неправильний формат для cartItems</p>
                    )
                  ))
                ) : (
                  <p>Кошик порожній</p>
                )}
              </div>
            </span>
          </div>
        )}
      </>
    );
  };

  export default Basket;
