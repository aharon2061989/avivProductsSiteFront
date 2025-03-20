import React from "react";
import "./Navbar.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import  { IconButton } from "@mui/material";

function Navbar2() {
    return(
        <nav className="navbar">
            <div>
                {/* <img className="logo" src=""/> */}
            </div>
            <div className="icons">
                <a className="gallery" href="/PicGallery">גלריית תמונות</a>

                <IconButton
                    sx={{ color: "white" }}
                    href="https://wa.me/0504066900"
                    target="_blank"
                    aria-label="WhatsApp">
                    <WhatsAppIcon />
                </IconButton>

                <IconButton
                    sx={{ color: "white" }}
                    href="tel:0504066900"
                    aria-label="Phone">
                    <PhoneIcon />
                </IconButton>

            </div>
        </nav>
    )
}

export default Navbar2;