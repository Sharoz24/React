const Shimmer = () => {
    return (
      <div>
    <div className="w-64 h-96 p-6 mb-6 bg-gray-300 shadow-lg animate-pulse">
        <div className="w-full h-48 bg-gray-400 mb-4"></div>
        <div className="w-3/5 h-4 bg-gray-400 mb-2"></div>
        <div className="w-4/5 h-4 bg-gray-400 mb-2"></div>
        <div className="w-full h-4 bg-gray-400"></div>
      </div>


      <div className="w-64 h-96 p-6 mb-6 bg-gray-300 shadow-lg animate-pulse">
        <div className="w-full h-48 bg-gray-400 mb-4"></div>
        <div className="w-3/5 h-4 bg-gray-400 mb-2"></div>
        <div className="w-4/5 h-4 bg-gray-400 mb-2"></div>
        <div className="w-full h-4 bg-gray-400"></div>
      </div>
      </div>
      
    );
  }

export default Shimmer;