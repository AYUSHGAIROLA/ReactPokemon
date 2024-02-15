import React from 'react';
import { PokemonModel } from '../models/pokemon.model'

export function PokemonCardComponent(props: any) {
    const { pokemon } = props;
    return (
        <div className='pokemon-card-container'>
            <div className='pokemon-card-content-container'>
                <div>
                    <img src={pokemon.image}></img>
                </div>
                <div>{pokemon.name}</div>
                <div>{pokemon.attack}</div>
                <div>{pokemon.type}</div>
                <div>{pokemon.power}</div>
            </div>
        </div>
    )
}

export default PokemonCardComponent