import { Button, Card, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Header({ socket, user, setUser }) {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);

    /* function createNewRoom() {
        const roomId = uuidv4();
        navigate(`/room/${roomId}`);
        socket.emit("new-room-created", { roomId });
        setRooms([...rooms, roomId]);
    } */

    const handleLogout = () => {
        console.log("USERNAME: " + user.username);
        setUser({ username: "" });
    }

    useEffect(() => {
        if (!socket) return;

        socket.on("new-room-created", ({ roomId }) => {
            setRooms([...rooms, roomId]);
        })
    }, [socket]);

    return (
        <Card>
            {console.log(socket)}
            <Link to="/home">
                <Button>Home</Button>
            </Link>
            <Link to="/chats">
                <Button>Chats</Button>
            </Link>
            <Button onClick={handleLogout}>
                Logout
            </Button>
            <Card>
                You are {user.username}
            </Card>
            {/* <Button onClick={createNewRoom}>
                New Room
            </Button> */}
            {/* <Box>
                {
                    rooms.map((room) => (
                        rooms && (
                            <Link to={`/room/${room}`}>
                                {room}
                            </Link>
                        )

                    ))
                }
            </Box> */}


            {/* <Link to={`/room/${roomId}`}>
                Room 1
            </Link> */}
        </Card>
    )
}