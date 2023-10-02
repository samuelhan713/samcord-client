import React from 'react';
import { useOutletContext, Outlet } from 'react-router-dom';
import "../css/Home.scss";
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MessageList from '../components/ChatWindow';



//This should be the "smart" component (?)

function Home({ socket }) {
    /* const { socket } = useOutletContext();
    return (
        <div>
            Home
        </div>

    ); */
    /* const [socket, setSocket] = useState(null); */
    const [user, setUser] = useState({ username: "sammy" });

    /* useEffect(() => {
        setSocket(io("http://localhost:4000"));
    }, []); */

    return (
        <div className="Home">
            <Header socket={socket} user={user} setUser={setUser} />
            {/* <Outlet context={{ socket }} /> */}
            <MessageList socket={socket} />
        </div>
    );

}

export default Home;