import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./styles/GlobalStyles";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/list", element: <ListPage /> },
    { path: "/detail/:id", element: <DetailPage /> },
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
