import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fun, setFun] = useState(false);

  const colorChanger = (string) => {
    let stringArr = string.split('');
    let colorCount = 0;
    let id = 0;
    const colors = [
      'text-red-600',
      'text-orange-600',
      'text-yellow-400',
      'text-green-700',
      'text-blue-700',
      'text-purple-700'
    ];
      
    return stringArr.map(character => {
      return <span key={id++} className={fun ? colors[colorCount++ % colors.length] : ''}>{character}</span>
    })
  };

  return (
    <div className={fun ? "font-fredoka-one" : "font-roboto-slab"}>
      <Navbar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fun={fun}
        setFun={setFun}
        colorChanger={colorChanger}
      />

      <div className="pt-nav flex justify-center items-center">
        <Route exact path="/" render={() => {
          return <Home
            fun={fun}
            setFun={setFun}
            colorChanger={colorChanger}
          />
        }} />

        <Route exact path="/about" render={() => {
          return <About 
            fun={fun}
            setFun={setFun}
            colorChanger={colorChanger}
          />
        }} />

        <Route exact path="/projects" render={() => {
          return <Projects />
        }} />
      </div>

      <Footer fun={fun} />
    </div>
  );
}

export default App;
