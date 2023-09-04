import React from 'react'; // Importe la bibliothèque React.
import "./Banner.scss" // Importe les styles CSS du composant Banner.

function Banner() {
    return (
        <div className="banner">
            {/* Utilise {'\n'} pour insérer un retour à la ligne dans le texte */}
            <h1>Chez vous,{'\n'}partout et ailleurs</h1>
        </div>
    )
}

export default Banner; // Exporte le composant Banner pour une utilisation ailleurs.
