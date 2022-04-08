import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const {user, handleSingOut} =useFirebase()
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/order">Order</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>
              { user?.uid ?
              <button onClick={handleSingOut}>sing Out</button>
              :
            <Link to="/login">Login</Link>
              }
            </nav>
        </div>
    );
};

export default Header;