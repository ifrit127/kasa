import React, {useEffect, useState} from 'react'; // Importe la bibliothèque React.
import arrow from '../../../assets/arrow_back.png'; // Importe l'image de flèche.
import './Logement_Description.scss'; // Importe le fichier de style SCSS.

function Logement_Description({ DescriptionTitle, Content }) {
    const [isContentVisible, setIsContentVisible] = useState(false); // Utilise le hook d'état pour gérer la visibilité du contenu.

    const toggleContentVisibility = async () => {
        await setIsContentVisible(!isContentVisible); // Inverse la visibilité du contenu lorsqu'on clique sur la flèche.
        ajusterHauteurDivs();
    };

    useEffect(() => {
        
        window.addEventListener("resize", () => {
            ajusterHauteurDivs();
        });
    }, []);

    function ajusterHauteurDivs() {
       
        if (window.innerWidth > 768) { 
            let elementsToMatchHeight = document.querySelectorAll(".logement_description_content.visible");
            let maxHeight = 0;

            if (elementsToMatchHeight.length === 1) {
                
                elementsToMatchHeight[0].style.height = "auto";
            } else {
                
                elementsToMatchHeight.forEach(function(element) {
                    
                    let contenu = element.querySelector("p");
                    if (contenu) {
                        
                        if (contenu.clientHeight > element.clientHeight) {
                            
                            element.style.height = "auto";
                        }
                    }
                });
                elementsToMatchHeight.forEach(function(element) {
                    let originalHeight = element.clientHeight;
                    if (originalHeight > maxHeight) {
                        maxHeight = originalHeight;
                    }
                });

                elementsToMatchHeight.forEach(function(element, index) {
                    element.style.height = maxHeight + "px";
                });
            }
        }
    }


    return (
        <div className='logements_descriptions'> {/* Conteneur global des descriptions. */}
            <div className='logement_description_title_wrapper'> {/* Conteneur pour le titre et la flèche. */}
                <div className='logement_description_title'>
                    <span>{DescriptionTitle}</span> {/* Affiche le titre de la description. */}
                    <img
                        src={arrow}
                        alt='arrow_back' 
                        className={`arrow ${isContentVisible ? 'active' : ''}`} // Applique la classe 'active' si le contenu est visible.
                        onClick={toggleContentVisibility} // Associe la fonction de basculement de la visibilité au clic sur la flèche.
                    />
                </div>
            </div>
            <div className={`logement_description_content ${isContentVisible ? 'visible' : ''}`}> {/* Contenu de la description. La classe 'visible' est appliquée si le contenu est visible. */}
                <p>{Content}</p> {/* Affiche le contenu de la description (paragraphe). */}
            </div>
        </div>
    );
}

export default Logement_Description; // Exporte le composant Logement_Description pour une utilisation ailleurs.
