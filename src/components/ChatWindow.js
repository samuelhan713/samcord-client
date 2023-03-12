import React, { useState } from 'react';
import "../css/ChatWindow.scss";
import { Box } from '@mui/system';
import { useEffect } from 'react';
import SendIcon from "@mui/icons-material/Send";
import { Container, Typography, OutlinedInput, InputAdornment, IconButton, InputLabel } from '@mui/material';
import { useOutletContext, useParams } from 'react-router-dom';



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

    const { socket } = useOutletContext();
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState(['']);
    const [typing, setTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const { roomId } = useParams();

    useEffect(() => {
        if (!socket) return;
        socket.on('message-from-server', (data) => {
            //the message will be sent to all other clients connected to the socket besides the sender itself
            /* console.log('message received on the CLIENT side', data); */
            console.log("message content: ", data.message);
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
        socket.emit("send-message", { message, roomId }); //this is connected to 'send-messsage' in server.js
        setChat((prev) => [...prev, message]);
        setMessage('');
    }

    function handleInput(e) {
        setMessage(e.target.value);
        socket.emit('typing-started', { roomId });

        if (typingTimeout) clearTimeout(typingTimeout);

        setTypingTimeout(setTimeout(() => {
            socket.emit('typing-stopped', { roomId });
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
                {
                    roomId && <Typography>Room: {roomId}</Typography>
                }
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