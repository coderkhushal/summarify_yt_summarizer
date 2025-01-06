
const SearchSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-indigo-50 to-white px-4">
      <div className="max-w-3xl w-full text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Summarize youtube videos in seconds
        </h1>
        <p className="text-lg text-gray-600">
          Just by entering the youtube video URL, you can get a summarized version of the video in seconds. 
        </p>
      </div>
      
      <div className="w-full max-w-2xl flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Enter youtube video url"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
          />
          {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md">
          Generate
        </button>
      </div>
      
      
    </div>
  );
};

export default SearchSection;