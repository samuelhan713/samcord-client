import React from 'react';
import './Home.scss';
import MessageList from './MessageList';


//This should be the "smart" component

function Home() {
    return (
        <div>
            <MessageList />
        </div>

    );

}

export default Home;