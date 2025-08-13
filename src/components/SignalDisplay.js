import React from 'react';

const SignalDisplay = ({ signal, isExpired }) => {
  if (!signal) return null;

  if (isExpired) {
    return (
      <div className="text-center mt-6">
        <div className="signal-card rounded-lg px-4 py-3 mx-4">
          <div className="text-2xl font-bold text-platinum/40 mb-1 font-display">
            Signal Expired
          </div>
          <p className="text-platinum/60 text-xs">
            Generating new signal...
          </p>
        </div>
      </div>
    );
  }

  const signalColor = signal === 'BUY' ? 'text-buy-green' : 'text-sell-red';
  const glowColor = signal === 'BUY' ? 'shadow-glow-green' : 'shadow-glow-red';
  const gradientBg = signal === 'BUY' 
    ? 'bg-gradient-to-br from-buy-green/20 to-buy-green/5' 
    : 'bg-gradient-to-br from-sell-red/20 to-sell-red/5';

  return (
    <div className="text-center mt-6">
      <div className={`signal-card rounded-lg px-6 py-4 mx-4 ${glowColor} ${gradientBg}`}>
        <div className={`text-4xl font-bold ${signalColor} mb-2 font-display tracking-tight animate-pulse-slow`}>
          {signal}
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${signal === 'BUY' ? 'bg-buy-green' : 'bg-sell-red'} animate-pulse`}></div>
          <span className="text-platinum/80 text-xs font-medium uppercase tracking-wider">
            Live Signal
          </span>
          <div className={`w-2 h-2 rounded-full ${signal === 'BUY' ? 'bg-buy-green' : 'bg-sell-red'} animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
};

export default SignalDisplay;