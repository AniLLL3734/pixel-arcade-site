
import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/games/${game.slug}`} className="block group">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-brand-light">
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4 className="mt-2 text-sm font-bold text-gray-200 truncate group-hover:text-brand-accent transition-colors">
        {game.title}
      </h4>
      <p className="text-xs text-gray-400">{game.category}</p>
    </Link>
  );
};

export default GameCard;
