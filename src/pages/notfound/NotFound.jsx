import React from 'react'; 
import "./NotFound.scss"; 
import { Link } from "react-router-dom"; 

function NotFound() {
    return (
        <> 
            <div className='error'> 
                <h1>404</h1> 
                <h2>Oups! La page que vous demandez n'existe pas.</h2> 
                <Link to="/">Retourner sur la page d’accueil</Link> 
            </div>
        </>
    )
}

export default NotFound; 
