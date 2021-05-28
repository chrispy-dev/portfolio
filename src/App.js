import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';

import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-roboto-slab">
      <Navbar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="pt-nav flex justify-center items-center">
        <Route exact path="/" render={() => {
          return <Home />
        }} />

        <Route exact path="/about" render={() => {
          return <About />
        }} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
