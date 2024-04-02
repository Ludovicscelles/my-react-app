
function NavBar ({pokemonIndex, pokemonList, handleClickNext, handleClickPrevious}) {

    
   
    return (
      <>
        {pokemonIndex > 0 ? 
            (<button onClick={handleClickPrevious
            }>précdent</button>)
            : null}
        
            {pokemonIndex < pokemonList.length - 1 ?
            (<button onClick={handleClickNext}>suivant</button>)
            : null}
     
      </>
            );
}

export default NavBar;