
function NavBar ({pokemonList, handlePokemon}) {

    
   
    return (
      <>
          {pokemonList.map((article, index) => (
             <button key={index} onClick={() => handlePokemon(index)}>
            {article.name}
            </button>
          ))}
      </>
            );
}

export default NavBar;