import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StreamList from "./StreamList";
import Movies from "./Movies";
import Cart from "./Cart";
import About from "./About";
import MovieSearch from "./pages/MovieSearch"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<MovieSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
