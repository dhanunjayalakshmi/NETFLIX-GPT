import { FaPlay, FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-xl lg:text-4xl px-10 font-bold">{title}</h1>
      <p className="hidden lg:inline-block md:w-1/4 py-6 text-xl md:px-10">
        {overview}
      </p>
      <div className="flex items-center justify-normal mt-2 ml-10">
        <button className="flex items-center text-black bg-white text-sm md:text-xl font-bold p-1 md:py-2 md:px-4 rounded-sm hover:bg-opacity-80">
          <FaPlay className="m-1 text-sm lg:text-xl" />
          Play
        </button>
        <button className="hidden md:flex items-center mx-4 bg-gray-600 text-sm md:text-xl font-bold py-2 px-3 rounded-sm hover:bg-opacity-80">
          <FaCircleInfo className="m-1 text-sm lg:text-xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
