import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import Payment from './Payment/Payment';
import CheckoutSteps from './Payment/CheckoutSteps';
import Fullfillment from './Fullfillment/fullfillment';

function App() {
    const openMenu = () => {
        document.querySelector(".sidebar")?.classList.add("open");
    };
    const closeMenu = () => {
        document.querySelector(".sidebar")?.classList.remove("open");
    };


    return (
        <Router>
            <div className="grid-container">

                <link rel="stylesheet" href="style.css" />
                <title>Diamond Memory</title>

                <body>
                    <div>
                        <header className="header">
                            <div className="brand">
                                <button onClick={openMenu}>&#9776;</button>
                                <a href="index.html">Diamond Memory</a>
                            </div>
                            <div className="header-links">
                                <Link to="/">Home</Link>
                                <Link to="/catalog">Catalog</Link>
                                <Link to="/orders">Orders</Link>
                                <Link to="/payment">Payment</Link>
                                <Link to="/fullfillment">Fullfillment</Link>
                            </div>
                        </header>
                        <aside className="sidebar">
                            <h3>Shopping Categories</h3>
                            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                            <ul>
                                <li><Link to='/catalog'>Shirts</Link></li>
                                <li><Link to='/catalog'>Pants</Link></li>
                            </ul>
                        </aside>
                        <main className="main">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/catalog" element={<Products />} />
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/order/:id" element={<OrderDetail />} />
                                <Route path="/payment" element={<Payment />} />
                                <Route path="/fullfillment" element={<Fullfillment />} />
                            </Routes>
                        </main>
                        <div className="content">
                            <ul className="products">
                                <li>
                                    <div className="product">
                                        <img className="product-image" src="images/d1.jpg" alt="product" />
                                        <div className="product-name">
                                            <a href="product.html">Slim Shirt</a>
                                        </div>
                                        <div className="product-brand">Nike</div>
                                        <div className="product-price">$60</div>
                                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <img className="product-image" src="images/d1.jpg" alt="product" />
                                        <div className="product-name">
                                            <a href="product.html">Slim Shirt</a>
                                        </div>
                                        <div className="product-brand">Nike</div>
                                        <div className="product-price">$60</div>
                                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <img className="product-image" src="images/d1.jpg" alt="product" />
                                        <div className="product-name">
                                            <a href="product.html">Slim Shirt</a>
                                        </div>
                                        <div className="product-brand">Nike</div>
                                        <div className="product-price">$60</div>
                                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <img className="product-image" src="images/d1.jpg" alt="product" />
                                        <div className="product-name">
                                            <a href="product.html">Slim Shirt</a>
                                        </div>
                                        <div className="product-brand">Nike</div>
                                        <div className="product-price">$60</div>
                                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <img className="product-image" src="images/d1.jpg" alt="product" />
                                        <div className="product-name">
                                            <a href="product.html">Slim Shirt</a>
                                        </div>
                                        <div className="product-brand">Nike</div>
                                        <div className="product-price">$60</div>
                                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <footer>
                            &copy; 2022 Diamond Memory
                        </footer>
                    </div>
                </body>
            </div>
        </Router>
    );
}

export default App;
