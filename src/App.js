import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import setSocket from 'socket.io-client';
import { io } from 'socket.io-client';
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

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
      <Outlet context={{ socket }} />
    </div>
  );
}

export default App;
