import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header.jsx";

export default function ProductPage() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <div>No product found</div>;
    }

    return (
        <>
            <Header />

            <div className={"description"}>
                <div className={"product-desc"}>
                    <img src={product.image} alt={product.title} style={{width: "400px", height: "500px"}}/>

                    <div className={"product-text"}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>

                        <div className={"product-price"}>
                            <h2>${product.price}</h2>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

