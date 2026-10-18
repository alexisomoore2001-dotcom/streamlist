import React, { useState } from "react";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    const apiKey = "2c4018b8e598e03c056fb89ddd368ede"; // your real key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    const response = await fetch(url);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className="movie-search-container">
      <h2>Search Movies</h2>

      <input
        type="text"
        placeholder="Search TMDB..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchMovies}>Search</button>

      <ul className="search-results">
        {results.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
