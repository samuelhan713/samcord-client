import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import MessageList from "./components/ChatWindow";
import Room from "./pages/Room";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/chats",
                element: <MessageList />
            },
            {
                path: "/room/:roomId",
                element: <Room />
            }
        ]
    },
]);

export default router;