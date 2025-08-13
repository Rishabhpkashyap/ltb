import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated trading lines */}
        <g className="trading-lines">
          {/* Line 1 - Main trend */}
          <path
            d="M0,400 Q200,350 400,380 T800,360 Q1000,340 1200,320"
            fill="none"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="2"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,400 Q200,350 400,380 T800,360 Q1000,340 1200,320;
                      M0,420 Q200,370 400,400 T800,380 Q1000,360 1200,340;
                      M0,400 Q200,350 400,380 T800,360 Q1000,340 1200,320"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Line 2 - Secondary trend */}
          <path
            d="M0,450 Q300,420 600,440 T1200,400"
            fill="none"
            stroke="rgba(239, 68, 68, 0.3)"
            strokeWidth="2"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,450 Q300,420 600,440 T1200,400;
                      M0,470 Q300,440 600,460 T1200,420;
                      M0,450 Q300,420 600,440 T1200,400"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Line 3 - Volatile line */}
          <path
            d="M0,300 Q150,280 300,320 Q450,360 600,300 Q750,240 900,280 Q1050,320 1200,260"
            fill="none"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
          >
            <animate
              attributeName="d"
              values="M0,300 Q150,280 300,320 Q450,360 600,300 Q750,240 900,280 Q1050,320 1200,260;
                      M0,320 Q150,300 300,340 Q450,380 600,320 Q750,260 900,300 Q1050,340 1200,280;
                      M0,300 Q150,280 300,320 Q450,360 600,300 Q750,240 900,280 Q1050,320 1200,260"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Moving dots on lines */}
          <circle r="3" fill="rgba(34, 197, 94, 0.6)">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M0,400 Q200,350 400,380 T800,360 Q1000,340 1200,320"
            />
          </circle>

          <circle r="2" fill="rgba(239, 68, 68, 0.6)">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M0,450 Q300,420 600,440 T1200,400"
            />
          </circle>

          {/* Candlestick-like elements */}
          {Array.from({ length: 20 }, (_, i) => (
            <g key={i}>
              <line
                x1={60 * i}
                y1={350 + Math.sin(i) * 30}
                x2={60 * i}
                y2={450 + Math.cos(i) * 20}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              >
                <animate
                  attributeName="y1"
                  values={`${350 + Math.sin(i) * 30};${370 + Math.sin(i) * 25};${350 + Math.sin(i) * 30}`}
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values={`${450 + Math.cos(i) * 20};${430 + Math.cos(i) * 15};${450 + Math.cos(i) * 20}`}
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
              </line>

              <rect
                x={60 * i - 2}
                y={380 + Math.sin(i) * 15}
                width="4"
                height={Math.abs(Math.cos(i) * 20) + 10}
                fill={Math.sin(i) > 0 ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"}
              >
                <animate
                  attributeName="height"
                  values={`${Math.abs(Math.cos(i) * 20) + 10};${Math.abs(Math.cos(i) * 15) + 15};${Math.abs(Math.cos(i) * 20) + 10}`}
                  dur={`${4 + (i % 2)}s`}
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          ))}
        </g>

        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <circle
            key={`particle-${i}`}
            r="1"
            fill="rgba(255,255,255,0.1)"
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
          >
            <animate
              attributeName="cy"
              values={`${Math.random() * 800};${Math.random() * 800 + 100};${Math.random() * 800}`}
              dur={`${8 + Math.random() * 4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur={`${3 + Math.random() * 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;