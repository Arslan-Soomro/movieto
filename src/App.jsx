import React from 'react';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
  <div className="App h-full">
    <Navbar />
    <Home />
  </div>
  )
}

export default App;