import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Shop />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
