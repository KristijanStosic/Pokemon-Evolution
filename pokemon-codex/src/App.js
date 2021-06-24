import { useState, useEffect } from 'react'
import PokemonThumbnail from './components/PokemonThumbnail'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  )

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    //console.log(data)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        )
        const data = await res.json()

        setAllPokemons((currentList) => [...currentList, data])

        //isto kao allPokemons.push(data)
      })
    }
    createPokemonObject(data.results)
    await allPokemons.sort((a, b) => a.id - b.id)
    //await console.log(allPokemons)
  }

  useEffect(() => {
    getAllPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='app-container'>
      <h1>Pokemon Evolution</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              base_experience={pokemon.base_experience}
              key={index}
            />
          ))}
        </div>
        <button className='load-more' onClick={() => getAllPokemons()}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default App
