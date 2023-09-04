import React from 'react'; 
import "../../../src/Sass.scss"; 
import Banner from '../../components/Banner/Banner.jsx'; 
import Gallery from '../../components/Gallery/Gallery.jsx'; 
import Main from '../../components/Main/Main.jsx'; 

function Home() {
    return (
        <div>
            <Main> {/* Composant Main englobant le contenu principal. */}
                <Banner/> {/* Composant Banner affichant la bannière de la page d'accueil. */}
                <Gallery/> {/* Composant Gallery affichant la galerie d'images. */}
            </Main>
        </div>
    )
}

export default Home; 
