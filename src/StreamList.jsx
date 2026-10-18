import React, { useState, useEffect } from "react";
import "./StreamList.css";

export default function StreamList() {
  const [movie, setMovie] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Load saved movies from LocalStorage on page load
  useEffect(() => {
    const saved = localStorage.getItem("movieList");
    if (saved && saved !== "[]") {
      setMovieList(JSON.parse(saved));
    }
  }, []);

  // Save movies to LocalStorage whenever movieList changes
  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }, [movieList]);

  // Add movie
  const handleAddMovie = () => {
    if (movie.trim() === "") return;

    console.log("StreamList item:", movie);

    const newMovie = {
      id: Date.now(),
      title: movie,
      completed: false,
    };

    setMovieList([...movieList, newMovie]);
    setMovie("");
  };

  // Delete movie
  const handleDelete = (id) => {
    setMovieList(movieList.filter((item) => item.id !== id));
  };

  // Mark complete
  const handleComplete = (id) => {
    setMovieList(
      movieList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Start editing
  const handleEditStart = (id, title) => {
    setEditId(id);
    setEditText(title);
  };

  // Save edit
  const handleEditSave = (id) => {
    setMovieList(
      movieList.map((item) =>
        item.id === id ? { ...item, title: editText } : item
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="streamlist-container">
      <h2>My StreamList</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Add a movie..."
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddMovie()}
        />
        <button onClick={handleAddMovie}>Add</button>
        <button onClick={() => setMovieList([])}>Clear All</button>
      </div>

      {movieList.length === 0 ? (
        <p>No movies added yet. Start your list!</p>
      ) : (
        <ul className="movie-list">
          {movieList.map((item) => (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              {editId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <span
                    className="material-icons save-icon"
                    onClick={() => handleEditSave(item.id)}
                  >
                    check_circle
                  </span>
                </>
              ) : (
                <>
                  <span className="movie-title">{item.title}</span>

                  <span
                    className="material-icons edit-icon"
                    onClick={() => handleEditStart(item.id, item.title)}
                  >
                    edit
                  </span>

                  <span
                    className="material-icons delete-icon"
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </span>

                  <span
                    className="material-icons complete-icon"
                    onClick={() => handleComplete(item.id)}
                  >
                    done
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
