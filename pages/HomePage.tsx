
import React from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/games';
import { Game } from '../types';
import GameCarousel from '../components/GameCarousel';

const Hero: React.FC<{ games: Game[] }> = ({ games }) => {
  if (games.length === 0) return null;
  
  // A simple hero showing the first featured game
  const heroGame = games[0];

  return (
    <div className="relative mb-12 rounded-lg overflow-hidden h-96">
      <img src={`${heroGame.thumbnailUrl.replace('/400/300', '/1200/800')}`} alt={heroGame.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8">
        <h1 className="text-4xl lg:text-5xl font-press-start text-white mb-2">{heroGame.title}</h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-4 hidden md:block">{heroGame.description}</p>
        <Link 
          to={`/games/${heroGame.slug}`} 
          className="inline-block px-8 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-300"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const featuredGames = games.filter(g => g.featured);
  const newAdditions = [...games].sort(() => 0.5 - Math.random()).slice(0, 10); // Random for demo
  const mostPlayed = [...games].sort((a, b) => b.plays - a.plays).slice(0, 10);
  const flashGems = games.filter(g => g.type === 'swf').slice(0, 10);
  const html5Hits = games.filter(g => g.type === 'html5').slice(0, 10);

  return (
    <div>
      <Hero games={featuredGames} />
      
      <GameCarousel title="New Additions" games={newAdditions} showInFeedAd={true} />
      <GameCarousel title="Most Played This Week" games={mostPlayed} />
      <GameCarousel title="Classic Flash Gems" games={flashGems} />
      <GameCarousel title="Modern HTML5 Hits" games={html5Hits} />
    </div>
  );
};

export default HomePage;
