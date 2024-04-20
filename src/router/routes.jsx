import HomePage from "../pages/HomePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import CatalogPage from "../pages/CatalogPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import CartPage from "../pages/CartPage.jsx";

export const routes = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/catalog",
        element: <CatalogPage />
    },
    {
        path: "/catalog/product/:productId",
        element: <ProductPage />
    },
    {
        path: "/cart",
        element: <CartPage />
    }
];