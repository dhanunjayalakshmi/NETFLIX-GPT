import { useSelector } from "react-redux";
import { LOGIN_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  const isLoading = useSelector((store) => store.movies.isLoading);
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={LOGIN_BACKGROUND}
          alt="login-background"
        />
      </div>

      <GptSearchBar />
      {isLoading ? (
        <div className="flex justify-center items-center h-screen p-4 m-4 bg-black text-white bg-opacity-90">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-white"></div>
        </div>
      ) : (
        <GptMovieSuggestions />
      )}
    </div>
  );
};

export default GptSearch;
