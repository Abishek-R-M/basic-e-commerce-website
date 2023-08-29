// fashion frenzy --- brand name 
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"


function NavBar() {
    return (
        <div className="navbar">
        <h1>Fashion Frenzy</h1>
            <div className="links">
                <Link id="link" to="/"> Shop</Link>
                <Link id="link" to="/cart" > <FontAwesomeIcon icon={faCartShopping} /> </Link>
            </div>
        </div>
    )
}

export default NavBar;