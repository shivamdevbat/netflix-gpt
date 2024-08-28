import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { options } from "../utils/Constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
  return <div></div>;
};

export default usePopularMovies;
