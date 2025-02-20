import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./styles/GlobalStyles";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import ProfileSetUpPage from "./pages/ProfileSetUpPage";
import ProfilePage from "./pages/ProfilePage";
// import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/list/:category", element: <ListPage /> },
    { path: "/detail/:id", element: <DetailPage /> },
    { path: "/profile-setup", element: <ProfileSetUpPage /> },
    { path: "/profile", element: <ProfilePage /> },
    // { path: "/chats", element: <ChatListPage /> },
    // { path: "/chats/:roomId", element: <ChatRoomPage /> },
    { path: "/chats", element: <ChatRoomPage /> }, // 시연 영상을 위한 단축 루트
]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
