import React, { useEffect } from 'react';
import Home from './pages/Home';
import RTemplate from "./pages/RTemplate";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login';
import MovieModal from "./components/MovieModal";
import movieScrap from "./scripts/movieScraper";
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
  <div className="App h-full">
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<RTemplate><Signup /></RTemplate>} />
      <Route path="/login" exact element={<RTemplate><Login /></RTemplate>} />
    </Routes>
  </div>
  )
}

export default App;