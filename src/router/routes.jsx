import HomePage from "../pages/HomePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const routes = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    }
];