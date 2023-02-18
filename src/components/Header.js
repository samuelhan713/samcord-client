import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Header() {
    const roomId = uuidv4();
    return (
        <Card>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/chats">
                <Button>Chats</Button>
            </Link>
            <Link to={`/room/${roomId}`}>
                Room 1
            </Link>
        </Card>
    )
}