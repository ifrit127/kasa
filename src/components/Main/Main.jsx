import React from 'react'; // Importe la bibliothèque React.

function Main({children}) {
    // La fonction Main rend un conteneur principal avec des enfants passés en tant que propriété "children".
    return <div className='main'>{children}</div>;
}

export default Main; // Exporte le composant "Main" pour qu'il puisse être utilisé ailleurs.
