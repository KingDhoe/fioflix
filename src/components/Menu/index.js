import React from 'react';
import Logo from '../../assetss/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Buttons';

function Menu ( ) {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Fioflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>       
    );
}
 
export default Menu; 