import React, { useEffect } from 'react';
import Home from './pages/Home';
import RTemplate from "./pages/RTemplate";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login';
import MovieModal from "./components/MovieModal";
import movieScrap from "./scripts/movieScraper";

function App() {

  return (
  <div className="App h-full">
    {/*
    <Navbar />
    <RTemplate><Signup /></RTemplate>
    */}

    <Home />
    {/*
    <MovieModal />
    */}
  </div>
  )
}

export default App;