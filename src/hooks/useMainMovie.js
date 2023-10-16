import { useDispatch, useSelector } from "react-redux";
import { addMainMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMainMovie = () => {
  const dispatch = useDispatch();

  const mainMovieInfo = useSelector((store) => store.movies.mainMovie);

  const getMainMovieInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/976573?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Hello...", json);
    dispatch(addMainMovie(json));
  };

  useEffect(() => {
    if (!mainMovieInfo) getMainMovieInfo();
  }, []);
};

export default useMainMovie;
