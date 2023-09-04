import React from 'react'; // Importe la bibliothèque React.
import './Gallery.scss'; // Importe les styles spécifiques à Gallery.
import Card from '../Card/Card.jsx'; // Importe le composant "Card".
import logements from '../../data/data.json'; // Importe les données de logement depuis un fichier JSON.

function Gallery() {
    // La fonction Gallery rend une liste de cartes en utilisant la méthode map() pour parcourir les données de logement.
    return (
        <div className="gray">
            {logements.map(logement => (
                <Card
                    title={logement.title} // Passe le titre du logement à la carte.
                    key={logement.id} // Utilise l'ID du logement comme clé unique pour chaque carte.
                    id={logement.id} // Passe l'ID du logement à la carte.
                    cover={logement.cover} // Passe l'image de couverture du logement à la carte.
                />
            ))}
        </div>
    );
}

export default Gallery; // Exporte le composant "Gallery" pour qu'il puisse être utilisé ailleurs.
