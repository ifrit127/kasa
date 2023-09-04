import React from 'react'; // Importe la bibliothèque React.
import logo from '../../assets/BLACK_LOGO.png'; // Importe le logo depuis le chemin spécifié.
import "./Footer.scss"; // Importe les styles CSS du composant Footer.

function Footer() {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={logo} alt='Kasa' className='logo' width="100px" /> 
            </div>
            <div className='footer_text'>
                © 2020 Kasa. All rights reserved 
            </div>
        </div>
    )
}

export default Footer; // Exporte le composant Footer pour une utilisation ailleurs.
