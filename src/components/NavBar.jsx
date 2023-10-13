import PokemonCard from "./PokemonCard";

function NavBar({ pokemonIndex, precedentClick, suivantClick, pokemonSize }) {
  return (
    <>
      {pokemonIndex > 0 && <button onClick={precedentClick}>Précédent</button>}
      {pokemonIndex < pokemonSize && (
        <button onClick={suivantClick}>Suivant</button>
      )}
    </>
  );
}

export default NavBar;
