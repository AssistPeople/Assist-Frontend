import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./styles/GlobalStyles";
import ProfileSetUpPage from "./pages/ProfileSetUpPage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/profile-setup", element: <ProfileSetUpPage /> },
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
