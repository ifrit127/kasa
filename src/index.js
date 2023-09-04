import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import Home from './pages/home/Home'; 
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar.jsx"; 
import Footer from './components/Footer/Footer.jsx'; 
import Logement from './pages/logement/Logement.jsx'; 
import About from './pages/about/About.jsx'; 
import NotFound from './pages/notfound/NotFound.jsx'; 

// Crée une instance de createBrowserRouter avec des routes et des éléments associés.
const router = createBrowserRouter([
    {
        path: "/",
        element: ( // Élément à afficher lorsque le chemin correspond à "/".
            <>
                <Navbar/>
                <Home/>
                <Footer/>
            </>
        ),
        errorElement: <NotFound/> // Élément à afficher en cas d'erreur.
    },
    {
        path: "/logement/:id",
        element: ( // Élément à afficher lorsque le chemin correspond à "/logement/:id".
            <>
                <Navbar/>
                <Logement/>
                <Footer/>
            </>
        ),
        errorElement: <NotFound/> // Élément à afficher en cas d'erreur.
    },
    {
        path: "/about",
        element: ( // Élément à afficher lorsque le chemin correspond à "/about".
            <>
                <Navbar/>
                <About/>
                <Footer/>
            </>
        ),
        errorElement: <NotFound/> // Élément à afficher en cas d'erreur.
    },
    {
        path: "/notfound",
        element: ( // Élément à afficher lorsque le chemin correspond à "/notfound".
            <>
                <Navbar/>
                <NotFound/>
                <Footer/>
            </>
        ),
        // Pas de définition d'errorElement, car "/notfound" est la page d'erreur.
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
    <React.StrictMode>
        <RouterProvider router={router}/> 
    </React.StrictMode>
);

reportWebVitals(); 
