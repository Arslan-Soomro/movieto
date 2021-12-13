import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import RTemplate from "./pages/RTemplate";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './utils/contexts';
import { TOKEN_NAME } from './utils/global';
import { isValidToken } from './utils/utils';


function App() {

  const [user, setUser] = useState({token: null, isLogged: false});

  useEffect(async () => {
    const accessToken = window.localStorage.getItem(TOKEN_NAME);
    if(await isValidToken(accessToken)){
      setUser({token: accessToken, isLogged: true});
    }
  }, [])

  return (
  <UserContext.Provider value={{user, setUser}}>
    <div className="App h-full">
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" element={<RTemplate><Signup /></RTemplate>} />
          <Route path="/login" exact element={<RTemplate><Login /></RTemplate>} />
      </Routes>
    </div>
  </UserContext.Provider>
  )
}

export default App;