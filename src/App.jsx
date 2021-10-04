import React, { useEffect } from 'react';
import Home from './pages/Home';
import RTemplate from "./pages/RTemplate";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login';
import MovieModal from "./components/MovieModal";
import movieScrap from "./scripts/movieScraper";
import * as cheerio from 'cheerio';
 
//Cannot import Cheerio or got or that scrap function

function App() {

  useEffect(() => {
    const markup = '<h1>What is it</h1>';
    const $ = cheerio.load(markup);
    console.log($.html());
  }, [])

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