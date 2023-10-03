import { useSelector } from "react-redux";
import useMovieLists from "../hooks/useMovieLists";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useEffect } from "react";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // useNowPlayingMovies();
  useMovieLists();
  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      window.scrollTo(60, 180);
    }
  });

  return (
    <div className="w-screen aspect-video">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
