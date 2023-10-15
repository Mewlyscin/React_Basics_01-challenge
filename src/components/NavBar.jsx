import PropTypes from "prop-types";

function NavBar({ pokemonList, pokemonIndex, setpokemonIndex }) {
  const clickName = (pokena) => {
    setpokemonIndex(pokemonList.indexOf(pokena));
  };
  return (
    <div className="NavBar">
      {pokemonList.map((pokena) => (
        <button onClick={() => clickName(pokena)} key={pokena.name}>
          {pokena.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
