
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Game } from '../types';
import { games } from '../data/games';
import GamePlayer from '../components/GamePlayer';
import CommentsSection from '../components/CommentsSection';
import AdPlaceholder from '../components/AdPlaceholder';
import PreRollAd from '../components/PreRollAd';
import GameCard from '../components/GameCard';
import StarIcon from '../components/icons/StarIcon';

const GamePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [relatedGames, setRelatedGames] = useState<Game[]>([]);
  const [showPreRoll, setShowPreRoll] = useState(true);

  useEffect(() => {
    const foundGame = games.find(g => g.slug === slug) || null;
    setGame(foundGame);

    if (foundGame) {
      const related = games
        .filter(g => g.category === foundGame.category && g.slug !== foundGame.slug)
        .slice(0, 4);
      setRelatedGames(related);
    }
    
    // Reset pre-roll ad for new game
    setShowPreRoll(true);

  }, [slug]);
  
  const handlePreRollComplete = () => {
    setShowPreRoll(false);
  };

  if (!game) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-press-start text-red-500">Game Not Found</h2>
        <p className="mt-4 text-gray-400">Oops! We couldn't find the game you were looking for.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-2 bg-brand-accent text-white font-bold rounded-lg hover:bg-pink-600 transition-colors">
          Back to Homepage
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {showPreRoll ? (
            <PreRollAd onComplete={handlePreRollComplete} />
          ) : (
            <GamePlayer game={game} />
          )}

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-press-start text-white">{game.title}</h1>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                 {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < 4} />)}
                 <span className="ml-2 text-gray-400">(4.0)</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{game.plays.toLocaleString()} plays</span>
            </div>
          </div>

          <div className="mt-8 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-brand-accent">
            <h3 className="font-bold">Description</h3>
            <p>{game.description}</p>
            <h3 className="font-bold">Instructions</h3>
            <p>{game.instructions}</p>
          </div>

          <CommentsSection />
        </div>

        {/* Right Column */}
        <aside className="space-y-8">
          <div className="flex justify-center lg:justify-start">
            <AdPlaceholder width={300} height={600} label="Skyscraper Ad" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-accent mb-4">Game Info</h3>
            <div className="space-y-2 text-gray-300 bg-brand-light/50 p-4 rounded-lg">
              <p><strong>Category:</strong> {game.category}</p>
              <div>
                <strong>Tags:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {game.tags.map(tag => (
                    <span key={tag} className="bg-gray-600 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-brand-accent mb-4">More Like This</h3>
            <div className="space-y-4">
              {relatedGames.map(relatedGame => (
                 <div key={relatedGame.slug} className="bg-brand-light/50 p-2 rounded-lg hover:bg-brand-light transition-colors">
                    <GameCard game={relatedGame} />
                 </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GamePage;
