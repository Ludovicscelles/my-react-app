import PropTypes from "prop-types";

function PokemonCard(props) {
  const { pokemon } = props ;
  return (
    <section>
      <img src = {pokemon.imgSrc}/>
      <h1>{pokemon.name}</h1>
    </section>
  );
}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc : PropTypes.string.isRequired,
  }).isRequired,
}
export default PokemonCard;

// function PokemonCard() {
//   const pokemon = { name: "mew" };

//   console.log(props);
//   console.log(pokemon.name);
//   console.log(pokemon.imgSrc);

//     if (!pokemon.imgSrc) {
//       return (
//         <>
//           <p>???</p>
//           <figcaption>{pokemon.name}</figcaption>
//         </>
//       );
//     } else {
//       return (
//         <figure>
//           <img src={pokemon.imgSrc} />
//           <figcaption>{pokemon.name}</figcaption>
//         </figure>
//       );
//       }
//     }
//   // // A faire pour la quête condition ternaire
//   // return <p>...</p>;
// // return <p>{!pokemon.imgSrc ? "???" + (pokemon.name) : (pokemon.imgSrc) + (pokemon.name) }</p> 
 
// // }
//   export default PokemonCard;


  