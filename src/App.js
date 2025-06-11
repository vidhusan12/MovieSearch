import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./utils/omdbApi";



function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("") // state variable for movie results

  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const results = await searchMovies(searchTerm);
    setMovies(results);
    console.log(results);
  }
  return (
    <>
      <h1>MovieSearch App</h1>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
    </>

  )
}

export default App;