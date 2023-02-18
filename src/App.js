import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home'
import Login from './components/pages/Login'


function App() {

  const userInfo = {
    username: "samuel.han@gmail.com"
  }

  const [user, setUser] = useState({ username: "" });

  const LoggingIn = details => {
    console.log(details);
    setUser({ username: details.username });
  }

  return (
    <div className="App">
      {/* {(user.username != "") ? (
        <Home username={user.username} />
      ) : (
        <Login LoggingIn={LoggingIn} />
      )} */}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
