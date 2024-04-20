import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";
import {ProductContext} from "../context/ProductContext.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

export default function CatalogPage() {
    const { products, isLoading, error } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (itemId) => {
        addToCart(itemId);
        alert("Added!");
    }

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
                                <button onClick={() => handleAddToCart(product.id)}>Buy</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    );
}
