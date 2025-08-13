import React, { useState } from 'react';

const Logo = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log('Logo image failed to load');
    setImageError(true);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="relative group mb-3">
        <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-br from-gold-accent via-platinum to-gold-accent shadow-glow-blue animate-glow">
          <div className="w-full h-full bg-premium-dark rounded-full flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img
                src="https://i.postimg.cc/Yvt36mMX/logo.png"
                alt="Premium Trading Logo"
                className="w-16 h-16 object-contain rounded-full"
                onError={handleImageError}
                onLoad={() => console.log('Logo loaded successfully')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-gold-accent to-platinum bg-clip-text text-transparent">
                  LTB
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent to-platinum rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
      </div>

      <p className="text-platinum/60 text-xs font-medium tracking-wider uppercase mb-2">
        Premium Trading Signals
      </p>
    </div>
  );
};

export default Logo;