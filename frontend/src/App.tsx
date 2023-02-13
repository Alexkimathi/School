import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import Links from './components/footer/Links';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      {/* <Contact /> */}
      <Links />
    </div>
  );
}

export default App;
