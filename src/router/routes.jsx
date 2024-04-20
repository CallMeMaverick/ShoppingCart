import HomePage from "../pages/HomePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Catalog from "../pages/Catalog.jsx";
import ProductPage from "../pages/ProductPage.jsx";

export const routes = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/catalog",
        element: <Catalog />
    },
    {
        path: "/catalog/product/:productId",
        element: <ProductPage />
    }
];