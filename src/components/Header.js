import { Button, Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Header() {
    const navigate = useNavigate();

    function createNewRoom() {
        const roomId = uuidv4();
        navigate(`/room/${roomId}`)
    }

    return (
        <Card>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/chats">
                <Button>Chats</Button>
            </Link>
            <Button onClick={createNewRoom}>
                New Room
            </Button>

            {/* <Link to={`/room/${roomId}`}>
                Room 1
            </Link> */}
        </Card>
    )
}