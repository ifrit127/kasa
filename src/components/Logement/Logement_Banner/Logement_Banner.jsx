import React from 'react'; // Importe la bibliothèque React.
import Carousel from '../../Carousel/Carousel'; // Importe le composant Carousel.

function Logement_Banner({ logement }) {
  const { pictures } = logement; // Récupère la liste d'images de logement depuis les propriétés.

  return (
    <div className='logement_image'>
      <Carousel images={pictures} /> {/* Affiche le composant Carousel avec les images du logement. */}
    </div>
  );
}

export default Logement_Banner; // Exporte le composant Logement_Banner pour une utilisation ailleurs.
