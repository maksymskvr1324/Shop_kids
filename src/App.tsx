import React from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/footer';
import { Card } from './components/productCard';
// import {card_1.webp} from './img';





function App() {
  return (
    <div>
      <Navbar />
        <Card/>
      <Footer/> 
    </div>
  );
}

export default App;
