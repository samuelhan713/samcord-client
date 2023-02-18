import React, { useState } from 'react';
import '../css/ChatWindow.scss';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import SendIcon from "@mui/icons-material/Send";
import { Container, Typography, OutlinedInput, InputAdornment, IconButton, InputLabel } from '@mui/material';



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
    const [typing, setTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);

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
        socket.on('typing-started-from-server', () => {
            setTyping(true); //can't we just set typing to false after a timeout here?
        })
        socket.on('typing-stopped-from-server', () => {
            setTyping(false);
        })
    }, [socket]);


    function handleForm(e) {
        e.preventDefault();
        socket.emit("send-message", { message }); //this is connected to 'send-messsage' in server.js
        setMessage('');
    }

    function handleInput(e) {
        setMessage(e.target.value);
        socket.emit('typing-started');

        if (typingTimeout) clearTimeout(typingTimeout);

        setTypingTimeout(setTimeout(() => {
            console.log('typing stopped');
            socket.emit('typing-stopped');
        }, 1000));

    }

    return (
        <div className="message-list">
            <Container>
                <Box>
                    {chat.map((m) => (
                        <Typography sx={{ marginBottom: 0.5 }}>{m}</Typography>
                    ))}
                </Box>
                <Box component="form" onSubmit={handleForm}>
                    {typing &&
                        <InputLabel sx={{ color: "white" }} shrink htmlFor="message-input">
                            Typing...
                        </InputLabel>
                    }

                    {/* SET TYPING TO FALSE WHEN NOT TYPING */}

                    <OutlinedInput
                        autoComplete='off'
                        sx={{ backgroundColor: "white" }}
                        border="white"
                        size="small"
                        fullWidth
                        id="message-input"
                        value={message}
                        placeholder="Write your message"
                        /* onChange={(e) => setMessage(e.target.value)} */
                        onChange={handleInput}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type="submit" edge="end">
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
            </Container>

        </div >
    );
}


export default MessageList;