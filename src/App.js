import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-roboto-slab">
      <Navbar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="pt-nav">
        <Route exact path="/" render={() => {
          return <Home />
        }} />
      </div>
    </div>
  );
}

export default App;
