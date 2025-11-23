import React from 'react';
import '../src/App.css';

function PokemonCard({pokemon}){

    const formattedNumber = `No. ${String(pokemon.id).padStart(4, '0')}`

    return (

       

            <div className='pokemon-card'>

                <img
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    className='pokemon-image'
                />
                <div className='pokemon-info'>
                    <p className='pokemon-number'>{formattedNumber}</p>
                    <h3 className='pokemon-name'>{pokemon.name}</h3>
                </div>
            </div>

    )

}

export default PokemonCard;