import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL, LOGIN_BACKGROUND } from "../utils/constants";
import { useEffect, useState } from "react";

const MovieInfo = () => {
  const { movieId } = useParams();
  const [videoKey, setVideoKey] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);

  const navigate = useNavigate();
  // const movie = useSelector((store) => store?.movies?.movie);
  const movie = JSON.parse(sessionStorage.getItem("movie_data"));

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data?.json();
    console.log(json);

    const filteredTrailers = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredTrailers?.length
      ? filteredTrailers[0]
      : json?.results[0];

    setVideoKey(trailer?.key);
  };

  const videoUrl = "https://www.youtube.com/embed/" + videoKey + "?&autoplay=1";

  useEffect(() => {
    getMovieVideo();
  }, []);

  console.log(movieId);

  if (movie === null) {
    navigate("/browse");
  }

  const { title, release_date, overview, vote_average, poster_path } = movie;

  // console.log(movie);

  return (
    <>
      <div className="fixed">
        <img
          className="w-screen h-screen object-cover"
          src={LOGIN_BACKGROUND}
          alt="login-background"
        />
      </div>
      <div className="flex flex-col h-screen">
        {playVideo ? (
          <div className="relative h-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white p-2"
              onClick={() => setPlayVideo(false)}
            >
              Back
            </button>
          </div>
        ) : (
          <div className="absolute p-4 h-auto m-auto sm:h-[100%] lg:w-[90%] lg:h-[90%] xl:w-[70%] 2xl:w-[60%] 2xl:h-[70%] lg:left-0 lg:right-0 lg:top-0 lg:bottom-0 text-base md:text-xl text-white bg-black bg-opacity-90 rounded-lg">
            <button
              className="text-xl md:text-2xl text-red-700 px-4 md:px-6 py-2 md:my-2"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 lg:p-2">
                <img
                  className="mx-auto w-[50%] sm:w-[40%] lg:w-auto"
                  src={IMG_CDN_URL + "w400/" + poster_path}
                  alt="Movie"
                />
              </div>

              <div className="w-full lg:w-2/3 lg:p-2">
                <h1 className="text-xl md:text-3xl text-red-700 font-bold">
                  {title}
                </h1>
                <p className="py-2 font-bold text-slate-300 text-md md:text-2xl">
                  Overview
                </p>
                <p className="py-1 text-md md:text-xl">{overview}</p>
                <p className="py-2 font-bold text-slate-300 text-md md:text-2xl">
                  Release Date
                </p>
                <p className="py-1 text-lg md:text-xl">{release_date}</p>
                <p className="py-2 font-bold text-slate-300 text-md md:text-2xl">
                  Rating
                </p>
                <p className="py-1 text-md md:text-xl">{vote_average}</p>

                {!playVideo && (
                  <button
                    className="mx-auto font-semibold sm:my-2 sm:py-2 my-4 py-4 px-6 bg-red-500 text-white"
                    onClick={() => setPlayVideo(true)}
                  >
                    Play
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieInfo;
