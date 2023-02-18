import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Card>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/chats">
                <Button>Chats</Button>
            </Link>
            <Link to="/room/:roomId">
                Room 1
            </Link>
        </Card>
    )
}