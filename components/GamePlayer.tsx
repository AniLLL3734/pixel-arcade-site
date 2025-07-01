
import React, { useState } from 'react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const elem = document.getElementById(`game-container-${game.slug}`);
    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for exit from fullscreen (e.g., by pressing ESC)
  React.useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const gameContent = game.type === 'swf'
    ? (
      <object className="w-full h-full">
        <embed src={game.gameFile} className="w-full h-full" />
      </object>
    )
    : (
      <iframe
        src={game.gameFile}
        title={game.title}
        className="w-full h-full border-0"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    );

  return (
    <div>
      <div id={`game-container-${game.slug}`} className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg shadow-brand-accent/20">
        {gameContent}
      </div>
       <div className="mt-4 flex justify-end">
        <button 
          onClick={toggleFullscreen}
          className="px-4 py-2 bg-brand-light text-white font-bold rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v4a1 1 0 001 1h2a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 01-1-1V4a1 1 0 011-1h1a1 1 0 100-2H4zm12 0a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v1a1 1 0 001 1h2a1 1 0 001-1V4a2 2 0 00-2-2h-1a1 1 0 100-2h-1zM4 12a2 2 0 00-2 2v2a2 2 0 002 2h2a1 1 0 100-2H5a1 1 0 01-1-1v-1a1 1 0 00-2 0v1zm12 0a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 100 2h2a2 2 0 002-2v-2a1 1 0 00-1-1h-1z" clipRule="evenodd" />
          </svg>
          <span>{isFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}</span>
        </button>
      </div>
    </div>
  );
};

export default GamePlayer;
