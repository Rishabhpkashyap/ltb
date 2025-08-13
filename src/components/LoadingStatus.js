import React, { useState, useEffect } from 'react';

const loadingSteps = [
  { text: "Connecting to Server", duration: 800 },
  { text: "Authenticating Session", duration: 600 },
  { text: "Fetching Chart Data", duration: 900 },
  { text: "Analyzing Market Trends", duration: 1200 },
  { text: "Processing Technical Indicators", duration: 800 },
  { text: "Calculating Risk Factors", duration: 700 },
  { text: "Generating Signal", duration: 600 }
];

const LoadingStatus = ({ isActive, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      setProgress(0);
      return;
    }

    let stepTimer;
    let progressTimer;
    let progressValue = 0;

    const runStep = (stepIndex) => {
      if (stepIndex >= loadingSteps.length) {
        onComplete();
        return;
      }

      setCurrentStep(stepIndex);
      const step = loadingSteps[stepIndex];
      
      // Animate progress for current step
      const progressIncrement = 100 / loadingSteps.length;
      const startProgress = stepIndex * progressIncrement;
      const endProgress = (stepIndex + 1) * progressIncrement;
      
      progressValue = startProgress;
      setProgress(startProgress);

      const progressInterval = step.duration / 20; // 20 updates per step
      const progressStep = (endProgress - startProgress) / 20;

      progressTimer = setInterval(() => {
        progressValue += progressStep;
        if (progressValue >= endProgress) {
          progressValue = endProgress;
          clearInterval(progressTimer);
        }
        setProgress(Math.min(progressValue, 100));
      }, progressInterval);

      stepTimer = setTimeout(() => {
        clearInterval(progressTimer);
        runStep(stepIndex + 1);
      }, step.duration);
    };

    runStep(0);

    return () => {
      clearTimeout(stepTimer);
      clearInterval(progressTimer);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="mt-6 mx-4">
      <div className="premium-glass rounded-xl p-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-platinum font-medium text-lg">
              {loadingSteps[currentStep]?.text}
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-platinum/60 text-sm">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingStatus;