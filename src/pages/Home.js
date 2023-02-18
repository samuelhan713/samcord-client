import React from 'react';
import { useOutletContext } from 'react-router-dom';
import "../css/Home.scss";

//This should be the "smart" component (?)

function Home() {
    const { socket } = useOutletContext();
    return (
        <div>
            Home
        </div>

    );

}

export default Home;