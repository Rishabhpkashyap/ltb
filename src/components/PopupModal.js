import React from 'react';

const PopupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleJoinTelegram = () => {
    // Replace with actual Telegram group link
    window.open('https://t.me/ladytraderbot', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Join Our Telegram Group
        </h2>
        
        <p className="text-gray-300 mb-6 text-center">
          Get the latest trading tips, signals, and updates directly in our Telegram group.
        </p>
        
        <button
          onClick={handleJoinTelegram}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default PopupModal;