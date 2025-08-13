import React from 'react';

const Button = ({ onClick, children, disabled, loading }) => {
  const isStopButton = children?.toString().includes('Stop');
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`premium-button w-full py-3 px-6 rounded-lg font-bold text-white text-sm transition-all duration-300 transform ${
        disabled || loading
          ? 'opacity-50 cursor-not-allowed scale-100'
          : 'hover:scale-105 active:scale-95 shadow-glow-blue hover:shadow-glow-blue'
      } ${isStopButton ? 'bg-gradient-to-r from-red-600 to-red-700' : ''}`}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Processing...</span>
        </div>
      ) : (
        <span className="relative z-10 tracking-wide font-semibold flex items-center justify-center space-x-2">
          {isStopButton && (
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          )}
          <span>{children}</span>
          {!isStopButton && (
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          )}
        </span>
      )}
    </button>
  );
};

export default Button;