import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";
import {useState, useEffect} from "react";

export default function Catalog() {
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
        <>
            <Header />
            {isLoading ? <div className={"loading"}><h1>Fetching data...</h1></div> : error ? <div className={"error"}><h1>❌ Error while fetching data: {error}</h1></div> :
                <div className={"products-wrapper"}>
                    {products.map(product => (
                        <div className={"product"} key={product.id}>
                            <Link to={`/catalog/product/${product.id}`} state={{product}}>
                                <img src={product.image} alt={product.title} style={{width: "100px"}}/>
                                <h3>{product.title}</h3>
                            </Link>

                            <hr/>
                            <div className={"price-wrapper"}>
                                <p>${product.price}</p>
                                <button>Buy</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    );
}
