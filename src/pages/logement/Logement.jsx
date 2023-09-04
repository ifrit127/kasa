import React, { useEffect } from 'react';
import "./Logement.scss"; 
import LogementBanner from '../../components/Logement/Logement_Banner/Logement_Banner'; 
import LogementHeader from '../../components/Logement/Logement_Header/Logement_Header'; 
import LogementDescription from '../../components/Logement/Logement_Description/Logement_Description'; 
import { useNavigate, useParams } from 'react-router-dom'; 
import logements from '../../data/data.json'; 

function Logement() {
    const { id } = useParams(); // Récupère l'ID du logement à partir des paramètres d'URL.
    const navigate = useNavigate(); // Initialise la fonction de navigation.

    useEffect(() => {
        // Utilise useEffect pour effectuer des actions après le rendu du composant.

        const ActualLogement = logements.find(logement => logement.id === id); // Trouve le logement correspondant à l'ID.

        if (!ActualLogement) {
            navigate('/NotFound'); // Si le logement n'est pas trouvé, redirige vers la page NotFound.
        }

        window.scrollTo(0, 0); // Fait défiler la fenêtre vers le haut lorsque le composant est monté.

    }, [id, navigate]); // Dépendances de l'effet, ce qui déclenchera l'exécution de l'effet.

    const ActualLogement = logements.find(logement => logement.id === id); // Recherche à nouveau le logement correspondant à l'ID.

    if (!ActualLogement) {
        return null; // Si le logement n'est pas trouvé (cas de la redirection), retourne null.
    }

    return (
        <div className='logement_page'> {/* Conteneur global de la page de logement. */}
            <LogementBanner logement={ActualLogement} /> {/* Composant LogementBanner avec les données du logement. */}
            <LogementHeader logement={ActualLogement} /> {/* Composant LogementHeader avec les données du logement. */}
            <div className='logement_description'> {/* Conteneur pour la description du logement et ses équipements. */}
                <LogementDescription DescriptionTitle="Description" Content={ActualLogement.description} />
                {/* Composant LogementDescription pour la description du logement. */}
                <LogementDescription DescriptionTitle="Equipements" Content={ActualLogement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))} />
                {/* Composant LogementDescription pour la liste des équipements du logement. */}
            </div>
        </div>
    );
}

export default Logement; 
