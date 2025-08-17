import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="w-full mb-6">
      {/* Logout button */}
      {currentUser && (
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="text-sm text-red-400 hover:text-red-300 transition-colors px-3 py-1 rounded border border-red-400/30 hover:border-red-300/50"
          >
            Logout
          </button>
        </div>
      )}
      
      {/* Main Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 leading-tight whitespace-nowrap">
          Lady Trader Bot
        </h1>

        {/* Subtle underline effect */}
        <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-yellow-400 mx-auto mt-2 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default Header;