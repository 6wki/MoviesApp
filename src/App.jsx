import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import MoviesContainer from "./MoviesContainer";
import axios from "axios";
import CardMovie from "./CardMovie";
import MovieDetails from "./MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=22006fdc6740588ec8f99ce0772f459e&language=ar-US"
      );
      setMovies(res.data.results);
      setCount(res.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=22006fdc6740588ec8f99ce0772f459e&language=ar-US&query=${word}`
      );
      setMovies(res.data.results);
      setCount(res.data.total_pages);
    }
  };

  console.log(count);

  const getPage = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=22006fdc6740588ec8f99ce0772f459e&language=en-US&page=${page}`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
      setCount(res.data.total_pages);
    }
  };
  return (
    <div className="App">
      <Navbar search={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MoviesContainer
                movies={movies}
                getPage={getPage}
                count={count}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
