import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieLists = () => {
  const dispatch = useDispatch();

  const movieCategoriesData = useSelector((store) => store.movies);

  const movieCategories = [
    {
      category: "nowPlayingMovies",
      url_name: "now_playing",
      dispatcher: addNowPlayingMovies,
    },
    {
      category: "popularMovies",
      url_name: "popular",
      dispatcher: addPopularMovies,
    },
    {
      category: "topRatedMovies",
      url_name: "top_rated",
      dispatcher: addTopRatedMovies,
    },
    {
      category: "upcomingMovies",
      url_name: "upcoming",
      dispatcher: addUpcomingMovies,
    },
  ];

  const getMoviesData = async (movieCategory) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieCategory?.url_name +
        "?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(movieCategory?.dispatcher(json.results));
  };

  useEffect(() => {
    movieCategories?.map(async (movieCategory) => {
      if (!movieCategoriesData[movieCategory?.category])
        getMoviesData(movieCategory);
    });
  }, []);
};

export default useMovieLists;
