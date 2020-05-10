import React from 'react';

import '../Header/style.css';
import Pokeball from '../../img/pokeball.png';

const Header = () => (

    <header>
       <h3>Pokedex</h3> 
        <img src= {Pokeball} alt='Pokeball'/>
    </header>

);

export default Header;