import React from "react";
import "./Navbar.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar2() {
    return (
        <nav className="navbar">
            <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=61574411304742" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#1877F7"}} /></a>
                    <a href="https://www.instagram.com/aviv141989" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#f773c7"}} /></a>
                    <a href="tel:0504066900">
                        <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: "green" }} />
                    </a> 
            </div>

            <div className="links">
                <Link to="/gallery" className="gallery">גלריה</Link>
                <Link to="/" className="gallery">דף הבית</Link>
            </div>
        </nav>
    );
}

export default Navbar2;
