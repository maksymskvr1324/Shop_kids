import React from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/footer';
import {Page} from './components/Home';







const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <Page/> */}
      <Footer/> 
    </div>
  );
}

export default App;
