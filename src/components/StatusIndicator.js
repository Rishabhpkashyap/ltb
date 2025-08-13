import React from 'react';

const StatusIndicator = () => {
  return (
    <div className="w-full text-center mb-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/50 border border-white/20 backdrop-blur-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
        AI powered
      </span>
    </div>
  );
};

export default StatusIndicator;