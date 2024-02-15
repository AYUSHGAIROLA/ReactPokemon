import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

function PokemonHeaderComponent() {
    return (
        <div className='pokemon-header-component-container'>
            <div className='pokemon-header-home-icon-container'>
                <img
                    className="pokemon-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                />
            </div>
            <div className='pokemon-header-add-icon-container'>
                <IoIosAddCircle />
            </div>
        </div>
    );
}

export default PokemonHeaderComponent