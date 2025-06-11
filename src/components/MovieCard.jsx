import "../styles/MovieCard.css";

function MovieCard(props) {
  const { title, year, poster } = props; // destructure for easier access
  const image = poster !== "N/A" ? poster : "https://via.placeholder.com/150";

  return (
    <div className="movie-card">
      <img src={image} alt={`${title} Poster`} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;