import React, { useState } from 'react';
import './MessageList.scss';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Container, Typography } from '@mui/material';



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
    const [chat, setChat] = useState(['']);

    useEffect(() => {
        setSocket(io("http://localhost:4000"));
    }, []);

    useEffect(() => {
        if (!socket) return;
        socket.on('message-from-server', (data) => {
            //the message will be sent to all other clients connected to the socket besides the sender itself
            /* console.log('message received on the CLIENT side', data); */
            setChat((prev) => [...prev, data.message]); //data.message because message is an object
        })
    }, [socket]);


    function handleForm(e) {
        e.preventDefault();
        socket.emit("send-message", { message }); //this is connected to 'send-messsage' in server.js
        setMessage('');
    }

    return (
        <div className="message-list">
            <Container>
                <Box>
                    {chat.map((m) => (
                        <Typography>{m}</Typography>
                    ))}
                </Box>


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
            </Container>

        </div>
    );
}


export default MessageList;