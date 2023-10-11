import PokemonCard from "./components/PokemonCard";

function button({ precedentClick, suivantClick }) {
  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={precedentClick}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={suivantClick}>Suivant</button>
      )}
    </>
  );
}

export default NavBar;
