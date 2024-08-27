import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { options } from "../utils/Constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowMoviesPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowMoviesPlaying();
  }, []);
  return <div></div>;
};

export default useNowPlayingMovies;
