import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const handleClick = (movie) => {
    sessionStorage.setItem("movie_data", JSON.stringify(movie));
  };

  return (
    <div className="px-6 text-white">
      <h1 className="text-xl md:text-2xl xl:text-3xl font-bold py-4 mx-2 md:mx-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link
              to={`/watch/${movie.id}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
            >
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
