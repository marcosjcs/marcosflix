import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/marcosflix.png';
import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="MarcosFlix Logo"/>
      </Link>
      <Button as={Link} className="ButtonLink" to="/add/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;