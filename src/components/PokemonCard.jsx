import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const { imgSrc, name } = pokemon;

  return (
    <figure>
      {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
