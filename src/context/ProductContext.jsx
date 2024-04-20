import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext({
    products: [],
    isLoading: true,
    error: null
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function extractItems() {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/electronics");
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        extractItems();
    }, []);

    return (
        <ProductContext.Provider value={{ products, isLoading, error }}>
            { children }
        </ProductContext.Provider>
    )
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired
}