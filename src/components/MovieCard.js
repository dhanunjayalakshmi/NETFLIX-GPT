import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;

  return (
    <div className="w-52 mx-2 md:mx-4">
      <img src={IMG_CDN_URL + "w500/" + posterPath} alt="Movie" />
    </div>
  );
};

export default MovieCard;
