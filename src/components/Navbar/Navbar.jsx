import React from 'react'; // Importe la bibliothèque React.
import './Navbar.scss'; // Importe les styles CSS du composant Navbar.
import logo from '../../assets/LOGO.png'; // Importe le logo depuis le chemin spécifié.
import { NavLink } from 'react-router-dom'; // Importe le composant NavLink de React Router pour créer des liens de navigation.

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logo} alt='Kasa' className='logo' /> {/* Affiche le logo Kasa. */}

            <NavLink to="/">
                <div>Accueil</div> {/* Crée un lien de navigation vers la page d'accueil. */}
            </NavLink>

            <NavLink to="/about">
                <div>A Propos</div> {/* Crée un lien de navigation vers la page "A Propos". */}
            </NavLink>
        </nav>
    );
}

export default Navbar; // Exporte le composant Navigation pour une utilisation ailleurs.
