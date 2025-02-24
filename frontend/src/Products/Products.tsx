function Products() {
    return (
            <div className="content">
                <ul className="products">
                    {data.products.map((product) (
                        <li>
                            <div className="product">
                                <img
                                className="product-image"
                                src={Products.imageUrl}
                                alt="product"
                                />
                                <div className="product-name">
                                    <a href="product.html">{product.name}</a>
                                    </div>
                                    <div className="product-brand">{Products.brand}</div>
                                    <div className="product-price">{Products.price}</div>
                                    <div className="product-rating">
                                        {Products.rating} Stars ({Products.numberOfReviews} reviews)
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    )
}
export default Products;