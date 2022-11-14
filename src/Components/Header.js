import React from 'react'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/add-new-product">Add New Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    ) 
}
