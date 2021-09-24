import React from 'react';
import Home from './pages/Home';
import RTemplate from "./pages/RTemplate";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login'

function App() {
  return (
  <div className="App h-full">
    <Navbar />
    <RTemplate><Signup /></RTemplate>
  </div>
  )
}

export default App;