import { FaPlay, FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl ml-10 font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-sm ml-10">{overview}</p>
      <div className="flex items-center justify-normal ml-10">
        <button className="flex items-center text-black bg-white text-md font-bold py-2 px-4 rounded-sm hover:bg-opacity-80">
          <FaPlay className="m-1 text-xl" />
          Play
        </button>
        <button className="flex items-center mx-4 bg-gray-600 text-md font-bold py-2 px-4 rounded-sm hover:bg-opacity-80">
          <FaCircleInfo className="m-1 text-xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
