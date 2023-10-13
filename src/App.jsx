import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
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
      <NavBar
        pokemonIndex={pokemonIndex}
        precedentClick={precedentClick}
        suivantClick={suivantClick}
        pokemonSize={pokemonList.length - 1}
      />
    </>
  );
}

export default App;
