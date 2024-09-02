import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 bg-black">
      <h1 className="font-bold text-2xl px-3 text-white">{title}</h1>
      <div className="flex mt-5 overflow-x-scroll">
        <div className="flex gap-5">
          {movies ? (
            movies.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
