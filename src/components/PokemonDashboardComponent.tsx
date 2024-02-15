import React, { useState } from 'react';
import axios from 'axios';
import { PokemonModel } from '../models/pokemon.model';
import PokemonCardComponent from './PokemonCardComponent';

export function PokemonDashboardComponent() {
    const pokemons = axios.get('http://localhost:8000/api/pokemon');
    const [pokemonData, setPokemonData] = useState([]);
    pokemons.then((response) => {
        if (response && response.data && response.data.length) {
            setPokemonData(response.data);
        }
    }, (reason) => {
        console.log(reason)
    })
    return (
        <div>
            {
                pokemonData.map((oPokemon: PokemonModel) => {
                    return (
                        <div>
                            <PokemonCardComponent pokemon={oPokemon}></PokemonCardComponent>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default PokemonDashboardComponent