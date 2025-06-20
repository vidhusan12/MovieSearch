import "../styles/MovieList.css";

function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form id="search-form" onSubmit={onSubmit} >
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />

    </form>
  );
}

export default SearchBar;