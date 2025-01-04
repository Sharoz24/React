const Shimmer = () => {
  return (
    <div className="w-60 p-4 m-5 bg-gray-200 rounded-lg shadow-md">
      {/* Image Placeholder */}
      <div className="w-full h-60 rounded-lg bg-gray-300 mb-4"></div>
      {/* Text Placeholders */}
      <div className="h-6 shimmer rounded-md mb-2 bg-gray-300"></div>
      <div className="h-4 rounded-md mb-2 bg-gray-300"></div>
      <div className="h-4 rounded-md w-3/4 bg-gray-300"></div>
    </div>
  );
};

export default Shimmer;