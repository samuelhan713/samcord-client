import React, { useEffect, useState } from 'react';
import { Outlet, Route, Navigate, Routes } from 'react-router-dom';
import Header from './components/Header';
import setSocket from 'socket.io-client';
import { io } from 'socket.io-client';
import "./App.css";
import Home from './pages/Home.js';
import Login from './components/Login.js';
import MessageList from './components/ChatWindow';

function App() {
  const [socket, setSocket] = useState(null);

  /* useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []); */

  const [user, setUser] = useState({ username: "" });

  const LoggingIn = details => {
    console.log(details);
    setUser({ username: details.username });
  }

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home socket={socket} />}></Route>
          <Route path='/chats' element={<MessageList />}></Route>
          <Route path='/' element={<Login />}></Route>

          {/* <Route exact path='/' render={() => (
            <Navigate
              to='/login'
            />
          )} /> */}
        </Routes>
        {/* <Header socket={socket} user={user} setUser={setUser} />
        <Outlet context={{ socket }} /> */}
      </div>
    </div>
  );
}

export default App;