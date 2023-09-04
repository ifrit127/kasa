import React from 'react';
import "./About.scss";
import LogementDescription from '../../components/Logement/Logement_Description/Logement_Description';

function About() {
    return (
        <div>
            <div className='About_image'>
                <img src={require('../../assets/AboutBanner.png')} alt="AboutBanner" />
            </div>

            <div className='About_Section'>
                <LogementDescription
                    DescriptionTitle="Fiabilité"
                    Content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <LogementDescription
                    DescriptionTitle="Respect"
                    Content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <LogementDescription
                    DescriptionTitle="Service"
                    Content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <LogementDescription
                    DescriptionTitle="Sécurité"
                    Content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    );
}

export default About;

