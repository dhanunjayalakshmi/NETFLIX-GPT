import { FaPlay, FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-1/3">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="flex items-center justify-normal">
        <button className="flex items-center bg-gray-600 bg-opacity-50 text-white text-lg font-bold py-2 px-4 rounded-sm">
          <FaPlay className="m-1 text-xl" />
          Play
        </button>
        <button className="flex items-center mx-4 bg-gray-600 bg-opacity-50 text-white text-md font-bold py-2 px-4 rounded-sm">
          <FaCircleInfo className="m-1 text-xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
