import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="md:-mt-52 lg:-mt-72 pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top rated Movies"} movies={movies?.topRatedMovies} />
        {/* <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} /> */}
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        {/* <MovieList title={"Comedy"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Romance"} movies={movies?.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
