import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./utils/omdbApi";
import MovieCard from "./components/MovieCard";
import "../src/styles/MovieList.css";




function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]) // state variable for movie results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);

  }
  //this function will set the searchTerm,movies to empty and clear the error and loading state
  function handleClearSearch() {
    setSearchTerm("");
    setMovies([]);
    setError(null);
    setLoading(false);
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    if (!searchTerm.trim()) {
      alert("Please enter a movie title...")
      return;
    }
    setLoading(true); // start loading
    setError(null); // clear previous error

    try {
      const results = await searchMovies(searchTerm);
      setMovies(results);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false); // stop loading

  }
  return (
    <>
      <div className="search-section">
        <h1>MovieSearch App</h1>
        <div className="search-controls">
          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
          <button className="search-button" type="submit" form="search-form">
            Search
          </button>
          <button onClick={handleClearSearch} className="clear-button">
            Clear Search
          </button>
        </div>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
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