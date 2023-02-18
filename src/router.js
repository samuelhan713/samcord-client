import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import MessageList from "./components/pages/ChatWindow";

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
            }
        ]
    },
]);

export default router;