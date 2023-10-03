import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 mx-2 md:mx-6">
      <img src={IMG_CDN_URL + posterPath} alt="Movie image" />
    </div>
  );
};

export default MovieCard;
