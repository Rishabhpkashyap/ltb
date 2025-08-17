import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ timeframe, onExpire, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  // Convert timeframe to seconds
  const getInitialTime = (timeframe) => {
    switch (timeframe) {
      case '5s':
        return 5; // 5 seconds
      case '10s':
        return 10; // 10 seconds
      case '1m':
        return 60; // 1 minute
      case '2m':
        return 120; // 2 minutes
      case '3m':
        return 180; // 3 minutes
      case '5m':
        return 300; // 5 minutes
      case '15m':
        return 900; // 15 minutes
      default:
        return 60;
    }
  };

  useEffect(() => {
    if (isActive) {
      setTimeLeft(getInitialTime(timeframe));
    }
  }, [timeframe, isActive]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      if (timeLeft === 0 && isActive) {
        onExpire();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onExpire]);

  if (!isActive || timeLeft <= 0) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Show different format for seconds-only timeframes
  const isSecondsOnly = timeframe === '5s' || timeframe === '10s';

  return (
    <div className="text-center mt-4">
      <div className="text-3xl font-mono font-bold text-white">
        {isSecondsOnly ? 
          `${timeLeft}s` : 
          `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        }
      </div>
      <div className="text-sm text-gray-400 mt-1">
        Time remaining for {timeframe} signal
      </div>
    </div>
  );
};

export default CountdownTimer;