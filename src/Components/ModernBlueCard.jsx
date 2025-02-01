import React from "react";

const ModernBlueCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-800">
          Modern Card Title
        </div>
        <p className="text-gray-700 text-base">
          This is a modern and cool card component built with React and Tailwind
          CSS. It features a blue theme and a hover effect.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          #React
        </span>
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          #TailwindCSS
        </span>
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          #WebDev
        </span>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ModernBlueCard;
