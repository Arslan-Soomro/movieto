import React from 'react';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import MovieGallery from "./components/MovieGallery";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="App h-full">
    
    <Hero />
    <MovieGallery />
    <Footer />
  </div>
  )
}

export default App;