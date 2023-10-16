import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen bg-black pt-[6%] md:pt-0">
      <iframe
        className="top-0 left-0 w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&hd=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
