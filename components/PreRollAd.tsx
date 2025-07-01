
import React, { useEffect, useState } from 'react';
import AdPlaceholder from './AdPlaceholder';

interface PreRollAdProps {
  duration?: number;
  onComplete: () => void;
}

const PreRollAd: React.FC<PreRollAdProps> = ({ duration = 5, onComplete }) => {
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    if (countdown <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown, onComplete]);

  return (
    <div className="w-full aspect-video bg-black rounded-lg flex flex-col items-center justify-center space-y-6">
      <h3 className="text-xl font-bold text-gray-300">Your game is loading...</h3>
      <AdPlaceholder width={300} height={250} label="Pre-Roll Ad" />
      <p className="text-gray-400">Starting in {countdown}...</p>
    </div>
  );
};

export default PreRollAd;
