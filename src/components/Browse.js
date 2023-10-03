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
    window.scrollTo(60, 80);
    console.log("Hello");
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
