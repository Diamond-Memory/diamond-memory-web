import React, { use, useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
    id: number
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string;
}

const emptyProduct: Product[] = []

function Products() {
    const [products, setProducts]: [Product[], (products: Product[]) => void] = useState(emptyProduct);
    useEffect(() => {
        axios.get<Product[]>("https://localhost:7250/catalog",{
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
        }, [])

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating} ({product.numberOfReviews} reviews)</p>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
            ))}
        </div>
    );
}
export default Products;