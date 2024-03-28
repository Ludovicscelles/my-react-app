import PokemonCard from "./components/PokemonCard.jsx"; 
import { useState } from "react";



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setIndex] = useState(0);
  const handleClick1 = () => {
    setIndex(pokemonIndex + 1)
  }
  const handleClick2 = () => {
    setIndex(pokemonIndex - 1)
  }
  return (
    <>
    <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
    
    {pokemonIndex > 0 ? 
    (<button onClick={handleClick2}>précdent</button>)
    : null}

    {pokemonIndex < pokemonList.length - 1 ?
    (<button onClick={handleClick1}>suivant</button>)
    : null}
    </>
  );
}

export default App;
