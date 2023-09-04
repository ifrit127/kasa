import React from 'react'; // Importe la bibliothèque React.
import './Card.scss'; // Importe les styles CSS du composant Card.
import { Link } from 'react-router-dom'; // Importe le composant Link de React Router pour la navigation.

function Card({ title, cover, id }) {
    // Crée un objet "link" pour spécifier la destination du lien.
    const link = {
        pathname: "/logement/" + id, // Le chemin vers la page du logement avec l'ID.
        state: {
            locationId: id // Des données supplémentaires, si nécessaire.
        }
    };

    return (
        <div className='card'>
            {/* Utilise le composant Link pour créer un lien vers la page du logement */}
            <Link to={link.pathname} className='card_link' state={link.state}>
                <div className='image_container'>
                    <img className='cover' src={cover} alt='Cover' />
                    <div className='card_title'>{title}</div>
                </div>
            </Link>
        </div>
    );
}

export default Card; // Exporte le composant Card pour une utilisation ailleurs.
