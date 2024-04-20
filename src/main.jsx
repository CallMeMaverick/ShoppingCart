import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { routes } from "./router/routes.jsx";
import {ProductProvider} from "./context/ProductContext.jsx";
import {CartProvider} from "./context/CartContext.jsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <ProductProvider>

          <CartProvider>

              <RouterProvider router={router} />

          </CartProvider>

      </ProductProvider>

  </React.StrictMode>,
)
