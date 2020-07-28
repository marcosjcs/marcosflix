import React from 'react';
import Button from '../Button';
import Logo from '../../assets/img/marcosflix.png';
import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="MarcosFlix Logo"/>
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;