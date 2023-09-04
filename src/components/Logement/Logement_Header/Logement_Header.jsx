import React from 'react'; // Importe la bibliothèque React.
import './Logement_Header.scss'; // Importe le fichier de style SCSS.

function Logement_Header({ logement }) {
    // Destructure les propriétés du logement pour les utiliser plus facilement.
    const name = logement.host.name;
    const [firstName, lastName] = name.split(" "); // Divise le nom complet en prénom et nom de famille.

    return (
        <div className='logement_header'> {/* Conteneur global de l'en-tête du logement. */}
            <div className='logement_title'> {/* Conteneur pour le titre, l'emplacement et les tags. */}
                <h1>{logement.title}</h1> {/* Affiche le titre du logement. */}
                <h2>{logement.location}</h2> {/* Affiche l'emplacement du logement. */}

                <div className='tags'>
                    {/* Affiche les tags du logement en utilisant une boucle map. */}
                    {logement.tags.map((tag) => (
                        <span key={tag}>{tag}</span> 
                    ))}
                </div>
            </div>
            <div className='logement_all_details'> {/* Conteneur pour les détails du propriétaire et les étoiles de notation. */}
                <div className='logement_details'> {/* Conteneur pour les détails du propriétaire. */}
                    <div className='logement_owner'> {/* Conteneur pour le nom du propriétaire. */}
                        <h3>
                            <span>{firstName}</span> {/* Affiche le prénom du propriétaire. */}
                            <span>{lastName}</span> {/* Affiche le nom de famille du propriétaire. */}
                        </h3>
                    </div>
                    <div className='logement_owner_badge'> {/* Conteneur pour la photo du propriétaire. */}
                        <img src={logement.host.picture} alt=""/> {/* Affiche la photo du propriétaire. */}
                    </div>
                </div>
                <div className='stars'> {/* Conteneur pour les étoiles de notation. */}
                    {[1, 2, 3, 4, 5].map((num) => (
                        // Utilise une boucle map pour afficher les étoiles.
                        <span key={num} className={logement.rating >= num ? "full" : ""}>★</span>
                        // Affiche une étoile pleine si la notation est supérieure ou égale à 'num'.
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Logement_Header; // Exporte le composant Logement_Header pour une utilisation ailleurs.
