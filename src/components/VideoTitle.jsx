const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="pt-5 w-1/3">{overview}</p>
      <div className="pt-6">
        <button className="mr-2 px-12 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-white hover:text-black">
          Play
        </button>
        <button className="bg-gray-600 px-8 py-3 text-white rounded-md hover:bg-white hover:text-black">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
