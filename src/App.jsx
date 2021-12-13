import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import RTemplate from "./pages/RTemplate";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserContext } from './utils/contexts';
import { TOKEN_NAME } from './utils/global';
import { isValidToken } from './utils/utils';


function App() {

  const [user, setUser] = useState({token: null, isLogged: false});

  //TODO create a timeInterval that checks after certain time for token, and then updates user using setState
  //This way removing the token will log the user out and storing the right token will log the user in automatically
  //One Problem with this approach is that operations will delay with respect to time the interval takes to run

  useEffect(async () => {
    const accessToken = window.localStorage.getItem(TOKEN_NAME);
    //At The Start of The Application, Verify The Token
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