import React, { useState } from 'react';
import './MessageList.scss';
import Button from '@mui/material/Button';
import Field from '@mui/material/TextField';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { io } from 'socket.io-client';



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

    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setSocket(io("http://localhost:4000"));
    }, []);

    useEffect(() => {
        if (!socket) return;
        socket.on('message-from-server', (data) => {
            console.log('message received on the CLIENT side', data);
        })
    }, [socket]);


    function handleForm(e) {
        e.preventDefault();
        socket.emit("send-message", { message }); //this is connected to 'send-messsage' in server.js
        setMessage('');
    }

    return (
        <div className="message-list">
            <div className='messages'>
                <Box component="form" onSubmit={handleForm}>
                    <TextField
                        className='tfield'
                        autoComplete='off'
                        sx={{ input: { color: 'white' } }}
                        id='standard-basic'
                        label="Write your message"
                        InputLabelProps={{ style: { color: 'white' } }}
                        variant='standard' value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        borderColor='white'
                    />
                    <Button variant='text' type='submit'>Submit</Button>
                </Box>
            </div>
        </div>
    );
}


export default MessageList;