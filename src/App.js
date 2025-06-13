import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./utils/omdbApi";
import MovieCard from "./components/MovieCard";
import "../src/styles/MovieList.css";




function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]) // state variable for movie results
  const [loading, setLoading] = useState(false);

  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);

  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    if(!searchTerm.trim()){
      alert("Please enter a movie title...")
      return;
    }
    setLoading(true); // start loading

    const results = await searchMovies(searchTerm);
    setMovies(results);
    setLoading(false); // stop loading
  }
  return (
    <>
      <h1>MovieSearch App</h1>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      {loading && <p>Loading...</p>}
      <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))
      ) : (
        <p>No results found. Try another title</p>
      )}
      </div>
    </>

  )
}

export default App;