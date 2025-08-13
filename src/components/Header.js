import React from 'react';

const Header = () => {
  return (
    <div className="w-full text-center mb-6">
      {/* Main Header */}
      <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 leading-tight whitespace-nowrap">
        Lady Trader Bot
      </h1>

      {/* Subtle underline effect */}
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-yellow-400 mx-auto mt-2 rounded-full opacity-60"></div>
    </div>
  );
};

export default Header;