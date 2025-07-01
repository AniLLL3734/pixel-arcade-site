import React, { useState } from 'react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // A simple loading placeholder that will be displayed while the game loads.
  const loadingPlaceholder = (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white">
      {/* You must have a logo.png file in your /public folder for this to work */}
      <img src="/logo.png" alt="PixelArcade Logo" className="w-24 h-24 mb-4 animate-pulse" />
      <p className="text-xl font-semibold">PixelArcade Presents</p>
      <h2 className="text-3xl font-bold text-brand-accent mb-2">{game.title}</h2>
      <p className="text-gray-400">Loading Game...</p>
    </div>
  );

  const toggleFullscreen = () => {
    // We target the outer container now, which includes our branding and the game.
    const elem = document.getElementById(`game-player-wrapper-${game.slug}`);
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
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const gameContent = game.type === 'swf'
    ? (
      // Using <object> and <embed> is the standard for SWF files.
      <object type="application/x-shockwave-flash" data={game.gameFile} className="w-full h-full">
          <param name="movie" value={game.gameFile} />
          <param name="quality" value="high" />
          {/* Fallback content in case the object/embed fails */}
          <div className="w-full h-full bg-black flex items-center justify-center text-red-500">
              <p>Error: Flash player could not be loaded.</p>
          </div>
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
    <div id={`game-player-wrapper-${game.slug}`}>
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg shadow-brand-accent/20 relative">
        {/*
          This structure uses a placeholder for branding.
          The game content is positioned absolutely over it.
          This way, the placeholder is visible while the game loads in the background.
        */}
        <div className="absolute inset-0 z-0">
            {loadingPlaceholder}
        </div>
        <div className="absolute inset-0 z-10">
            {gameContent}
        </div>
      </div>
       <div className="mt-4 flex justify-between items-center">
        {/* Your Site Branding on the left */}
        <div className="flex items-center space-x-2 text-gray-400">
           <img src="/logo.png" alt="PixelArcade" className="h-6 w-6 rounded"/>
           <span className="font-semibold text-sm">Powered by PixelArcade</span>
        </div>

        {/* Fullscreen Button on the right */}
        <button 
          onClick={toggleFullscreen}
          className="px-4 py-2 bg-brand-light text-white font-bold rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 2a1 1 0 00-1 1v4a1 1 0 002 0V4h3a1 1 0 100-2H4zm12 0a1 1 0 00-1 1v3h-3a1 1 0 100 2h4a1 1 0 001-1V3a1 1 0 00-1-1zM4 14a1 1 0 00-1 1v3h3a1 1 0 100-2H4v-2a1 1 0 00-1-1zm12 0a1 1 0 00-1 1v2h-2a1 1 0 100 2h3a1 1 0 001-1v-3a1 1 0 00-1-1z" />
          </svg>
          <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
        </button>
      </div>
    </div>
  );
};

export default GamePlayer;