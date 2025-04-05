import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return(
        <footer>
            <div className="footer-container">
                <div className="footerSection">
                    <h4>צור קשר</h4>
                    <p>טלפון: <a href="tel:+97212345678">050-406-6900</a></p>
                    <p style={{direction:"rtl"}}><b style={{color:"white"}}>דוא"ל: </b><a href="mailto:avivitzhaki.com">avivitzhaki.com</a></p>
                </div>
                <div className="footerSection">
                    <h4>קישורים חשובים</h4>
                    <ul>
                        <li><Link to="/" onClick={scrollToTop}>עמוד הבית</Link></li>
                        <li><Link to="/Accessibility" onClick={scrollToTop}>הצהרת נגישות</Link></li>
                        <li><Link to="/PhotoGallery" onClick={scrollToTop}>גלריית תמונות</Link></li>


                    </ul>
                </div>
                <div className="footerSection">
                    <h4>עקבו אחרינו</h4>
                    <br />
                    <a href="https://www.facebook.com/profile.php?id=61574411304742" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#1877F7"}} /></a>
                    <a href="https://www.instagram.com/aviv141989?igsh=bmNnNDAwbDBtdDF0&utm_source=qr" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#f773c7"}} /></a>
                </div>
                <div className="footerSection" id="id">
                    <p><b style={{color:"white"}}>© 2024 כל הזכויות שמורות לאביב יצחקי</b></p>
                    <p><b style={{color:"white"}}>© אתר זה נבנה על ידי אהרון בן שימול</b></p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;


