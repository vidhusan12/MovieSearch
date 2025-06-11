const URL = "https://www.omdbapi.com/";
const apikey = "5390856d";

export async function searchMovies(searchTerm) {
  const response = await fetch(`${URL}?s=${searchTerm}&apikey=${apikey}`);
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
}