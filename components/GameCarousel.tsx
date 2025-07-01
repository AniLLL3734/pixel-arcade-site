import React from 'react';
import { Game } from '../types';
import GameCard from './GameCard';
import AdPlaceholder from './AdPlaceholder';

interface GameCarouselProps {
  title: string;
  games: Game[];
  showInFeedAd?: boolean;
}

// A type for carousel items, which can be a game or an ad placeholder.
type CarouselItem = Game | { isAd: true };

const GameCarousel: React.FC<GameCarouselProps> = ({ title, games, showInFeedAd = false }) => {
  const items: CarouselItem[] = [...games];
  if (showInFeedAd && items.length > 5) {
    // Insert ad placeholder, styled like a game card
    const adItem: { isAd: true } = { isAd: true };
    items.splice(5, 0, adItem);
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-press-start text-brand-accent mb-4 text-shadow-sm">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
        {items.map((item, index) => (
          <div key={'isAd' in item ? `ad-${index}` : item.slug} className="flex-shrink-0 w-64 md:w-72">
            {'isAd' in item ? (
               <div className="flex flex-col h-full">
                 <AdPlaceholder width={288} height={216} label="In-Feed Ad" />
                  <div className="mt-2 text-center">
                    <h4 className="text-sm font-bold text-gray-500">Advertisement</h4>
                  </div>
               </div>
            ) : (
              <GameCard game={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
