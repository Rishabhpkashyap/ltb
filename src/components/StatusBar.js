import React from 'react';

const StatusBar = ({ platform, asset, timeframe, onStop }) => {
  return (
    <div className="premium-glass rounded-lg p-3 mb-4">
      {/* Centered Live Session */}
      <div className="flex items-center justify-center mb-3">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
        <span className="text-red-400 text-xs font-medium uppercase tracking-wider">Live Session</span>
      </div>

      {/* Compact grid */}
      <div className="grid grid-cols-3 gap-2 text-xs mb-3">
        <div className="text-center">
          <div className="text-platinum/50 uppercase tracking-wider text-[10px] mb-1">Platform</div>
          <div className="text-platinum font-medium truncate">{platform}</div>
        </div>
        <div className="text-center">
          <div className="text-platinum/50 uppercase tracking-wider text-[10px] mb-1">Asset</div>
          <div className="text-platinum font-medium truncate">{asset}</div>
        </div>
        <div className="text-center">
          <div className="text-platinum/50 uppercase tracking-wider text-[10px] mb-1">Timeframe</div>
          <div className="text-platinum font-medium">{timeframe}</div>
        </div>
      </div>

      {/* Centered Stop Button */}
      <div className="flex justify-center">
        <button
          onClick={onStop}
          className="px-4 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-md text-white text-xs font-medium transition-all duration-300 transform hover:scale-105"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default StatusBar;