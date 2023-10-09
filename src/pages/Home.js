import React from 'react';
import { useOutletContext, Outlet } from 'react-router-dom';
import "../css/Home.scss";
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MessageList from '../components/ChatWindow';



//This should be the "smart" component (?)

function Home({ socket, user, setUser }) {
    //const [user, setUser] = useState({ username: {} });

    return (
        <div className="Home">
            <Header socket={socket} user={user} setUser={setUser} />
            {/* <MessageList socket={socket} /> */}
        </div>
    );

}

export default Home;