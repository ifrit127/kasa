import React, { useState } from 'react'; // Importe la bibliothèque React et useState.
import arrow from '../../assets/arrow_carousel.png'; // Importe l'image de la flèche.
import './Carousel.scss'; // Importe les styles CSS du composant Carousel.

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialise l'état local pour suivre l'index de l'image actuelle.

  // Fonction pour passer à la diapositive suivante.
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Fonction pour revenir à la diapositive précédente.
  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Vérifie s'il y a plus d'une image avant d'afficher les flèches de navigation */}
        {images.length > 1 && ( 
          <div className='carousel_arrow'>
            <img className="fleche-left" src={arrow} alt='' onClick={goToPreviousSlide} />
            <img className="fleche-right" src={arrow} alt='' onClick={goToNextSlide} />
          </div>
        )}
        {/* Vérifie s'il y a plus d'une image avant d'afficher le compteur de diapositives */}
        {images.length > 1 && (
          <span className="slide-counter">{currentIndex + 1}/{images.length}</span>
        )}
        <img className="slide" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    </div>
  );
}

export default Carousel; // Exporte le composant Carousel pour une utilisation ailleurs.

