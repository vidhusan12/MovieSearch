import { useState } from "react";
import SearchBar from "./components/SearchBar";



function App() {

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log("Searching for: ", searchTerm);
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