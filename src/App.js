import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PopupModal from './components/PopupModal';
import Header from './components/Header';
import StatusIndicator from './components/StatusIndicator';
import Logo from './components/Logo';
import Dropdown from './components/Dropdown';
import Button from './components/Button';
import SignalDisplay from './components/SignalDisplay';
import CountdownTimer from './components/CountdownTimer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingStatus from './components/LoadingStatus';
import StatusBar from './components/StatusBar';

const PLATFORMS = [
  'Quotex',
  'Pocket Option',
  'IQ Option',
  'OlympTrade',
  'Binomo',
  'ExpertOption'
];

const ASSETS = [
  'EUR/USD (OTC)',
  'USD/PKR (OTC)',
  'USD/BRL (OTC)',
  'CAD/CHF (OTC)',
  'GBP/CAD (OTC)',
  'GBP/NZD (OTC)',
  'USD/ZAR (OTC)',
  'EUR/JPY (OTC)',
  'NZD/CAD (OTC)',
  'NZD/CHF (OTC)',
  'USD/CAD (OTC)',
  'NZD/USD (OTC)',
  'USD/ARS (OTC)',
  'USD/BDT (OTC)'
];

const TIMEFRAMES = ['5s', '10s', '1m', '2m', '3m', '5m', '15m'];

function TradingApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [platform, setPlatform] = useState('');
  const [asset, setAsset] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [loading, setLoading] = useState(false);
  const [signal, setSignal] = useState('');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('popupShown');
    if (!hasShownPopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('popupShown', 'true');
  };

  const generateNewSignal = () => {
    const signals = ['BUY', 'SELL'];
    const randomSignal = signals[Math.floor(Math.random() * signals.length)];
    
    setSignal(randomSignal);
    setIsTimerActive(true);
    setIsExpired(false);
  };

  const handleGetSignal = async () => {
    if (!platform || !asset || !timeframe) {
      alert('Please select all options before getting a signal.');
      return;
    }

    setHasStartedOnce(true);
    setIsAutoMode(true);
    setLoading(true);
    setSignal('');
    setIsTimerActive(false);
    setIsExpired(false);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
    generateNewSignal();
  };

  const handleTimerExpire = () => {
    setIsTimerActive(false);
    setIsExpired(true);
    
    // Auto-generate next signal if in auto mode
    if (isAutoMode) {
      setTimeout(() => {
        setLoading(true);
        setSignal('');
        setIsExpired(false);
      }, 2000); // 2 second pause before next signal
    }
  };

  const handleStopSignals = () => {
    setIsAutoMode(false);
    setLoading(false);
    setIsTimerActive(false);
    setSignal('');
    setIsExpired(false);
  };

  // Auto-restart loading when expired in auto mode
  useEffect(() => {
    if (isAutoMode && isExpired && !loading && !isTimerActive) {
      const timer = setTimeout(() => {
        setLoading(true);
        setIsExpired(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAutoMode, isExpired, loading, isTimerActive]);

  const isFormValid = platform && asset && timeframe;

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      <AnimatedBackground />
      <PopupModal isOpen={showPopup} onClose={handleClosePopup} />
      
      <div className="container mx-auto px-3 py-4 relative z-10">
        <Header />
        <div className="max-w-sm mx-auto">
          <Logo />
          <StatusIndicator />
          
          {/* Show form only if not in auto mode or hasn't started once */}
          {!isAutoMode && (
            <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-gray-700/50 mb-3">
              <Dropdown
                label="Platform"
                value={platform}
                onChange={setPlatform}
                options={PLATFORMS}
                placeholder="Select Platform"
              />
              
              <Dropdown
                label="Asset"
                value={asset}
                onChange={setAsset}
                options={ASSETS}
                placeholder="Select Asset"
              />
              
              <Dropdown
                label="Time Frame"
                value={timeframe}
                onChange={setTimeframe}
                options={TIMEFRAMES}
                placeholder="Select Time Frame"
              />
              
              <Button
                onClick={handleGetSignal}
                disabled={!isFormValid}
                loading={false}
              >
                Get Signal
              </Button>
            </div>
          )}
          
          {/* Show status bar when in auto mode */}
          {isAutoMode && hasStartedOnce && (
            <StatusBar
              platform={platform}
              asset={asset}
              timeframe={timeframe}
              onStop={handleStopSignals}
            />
          )}
          
          <LoadingStatus 
            isActive={loading} 
            onComplete={handleLoadingComplete}
          />
          
          <SignalDisplay signal={signal} isExpired={isExpired} />
          
          <CountdownTimer
            timeframe={timeframe}
            onExpire={handleTimerExpire}
            isActive={isTimerActive}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <TradingApp />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;