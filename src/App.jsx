import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const precedentClick = () => {
    setpokemonIndex(pokemonIndex - 1);
  };
  const suivantClick = () => {
    setpokemonIndex(pokemonIndex + 1);
  };
  const pokemonList = [
    {
      name: "bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Carapuce",
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

export default App;
