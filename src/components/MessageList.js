import React from 'react';
import './MessageList.scss';


const DUMMY_DATA = [
    {
        senderId: 'sams d',
        text: 'Good D bro, good D'
    },
    {
        senderId: 'john cena',
        text: 'You cant see me'
    },
    {
        senderId: 'micheal jackson',
        text: 'weeeeooooo'
    }
]


function MessageList() {
    return (
        <div className="message-list">
            {DUMMY_DATA.map((message, index) => {
                return (
                    <div key={index} className="message"> {message.senderId}: {message.text}</div>
                );
            })}
        </div>
    );
}


export default MessageList;