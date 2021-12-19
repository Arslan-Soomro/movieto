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
import Watchlist from './pages/Watchlist';
import Account from "./pages/Account";


function App() {

  //For example when a user adds or removes movie to watchlist a message should display for some time that the movie has been added to watchlist

  //ARCHITECTURE CHANGE, whenever making a request we will access the token stored in the storage and use context for setting the status and not for getting the token because the delay in the token makes it not accessible from context, incase the token is not verified log user out

  const [user, setUser] = useState({token: null, isLogged: false});
  const navigate = useNavigate();

  useEffect(async () => {
    const accessToken = window.localStorage.getItem(TOKEN_NAME);
    //At The Start of The Application, Verify The Token

    //ARCHITECTURE CHANGE if the token is present in the local storage, we show the account
    //once we start making request based on that token, we will get to know if token is valid or not
    //if token is not valid we simply remove it from the storage and log the user out

    if(accessToken){
      setUser({token: accessToken, isLogged: true});
      if(await !isValidToken(accessToken)){
        setUser({token: accessToken, isLogged: true});
      }
    }

  }, []);

  return (
  <UserContext.Provider value={{user, setUser}}>
    <div className="App h-full">
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          {/* Watchlist and account routes only available when user is logged in otherwise login and signup are available */}
          {user.isLogged ? 
          <>
          <Route path="/watchlist" exact element={<Watchlist />} />
          <Route path="/account" exact element={<Account />} />
          </>
          :
          <>
          <Route path="/signup" element={<RTemplate><Signup /></RTemplate>} />
          <Route path="/login" exact element={<RTemplate><Login /></RTemplate>} />
          </>
          }
      </Routes>
    </div>
  </UserContext.Provider>
  )
}

export default App;