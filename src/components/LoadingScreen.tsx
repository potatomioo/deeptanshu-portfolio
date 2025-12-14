import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const fullName = 'DEEPTANSHU';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait 1 second then start animation out
        setTimeout(() => {
          setIsAnimatingOut(true);
          // Complete loading after animation
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
        }, 1000);
      }
    }, 150);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isAnimatingOut ? 'animate-out' : ''}`}>
      <div className="loading-content">
        <h1 className={`loading-name ${isAnimatingOut ? 'move-to-hero' : ''}`}>
          {displayText}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;