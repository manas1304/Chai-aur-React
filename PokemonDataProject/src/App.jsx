import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import PokemonCard from './pokedex.jsx';
import './App.css';

const pokemonAPIUrl = 'https://pokeapi.co/api/v2/pokemon';
const pokemonLimit = 50;

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {

    const fetchAllPokemon = async ()=> {

      try{

        const listResponse = await axios.get(`${pokemonAPIUrl}?limit=${pokemonLimit}`); // Object returned by Axios
        
        // console.log(listResponse)
        const results = listResponse.data.results; // Array of size = limit that contains the name of Pokemons...( here limit = 50 )
        console.log(results)

        const detailPromises = results.map((pokemon) => 
          axios.get(pokemon.url)
        )
        console.log(detailPromises)

        const detailResponses = await Promise.all(detailPromises);
        console.log(detailResponses)

        const detailedPokemon = detailResponses.map(response => ({  
          id: response.data.id,
          name: response.data.name,
          imageUrl: response.data.sprites.front_default,

        }));
        // console.log(detailedPokemon)

        setPokemonList(detailedPokemon);
        setIsLoading(false);

      }

      catch(err){

        console.log("Error fetching data: ", err);
        setError("Failed to Fetch Pokemon Data ")
        setIsLoading(false);

      }

    };

    fetchAllPokemon();


  }, [])

  // Empty dependency array means this runs only once on mount.

  if(isLoading) return <div className='loading'>Loading Pokemon GuideBook...</div>;
  if(error) return <div className='error'>{error}</div>

  return (

      <div className='app-container'>
        
        <header className='pokedex-header'>

          <h1>Pokedex</h1>

        </header>

        <main className='pokemon-grid-container'>

          <div className='pokemon-grid'>

            {
              pokemonList.map((pokemon) =>(
                <PokemonCard pokemon={pokemon}/>
              ))
            }

          </div>
        </main>
      </div>
      
  )
  
}

export default App
