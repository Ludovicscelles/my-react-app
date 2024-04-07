
function NavBar ({pokemonList, handleClick}) {

    
   
    return (
      <>
          {pokemonList.map((article, index) => (
             <button key={index} onClick={handleClick}>
            {article.name}
            </button>
          ))}
      </>
            );
}

export default NavBar;