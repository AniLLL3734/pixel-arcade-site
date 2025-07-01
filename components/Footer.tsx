
import React from 'react';
import AdPlaceholder from './AdPlaceholder';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="mb-6">
          <AdPlaceholder width={728} height={90} label="Footer Banner Ad" />
        </div>
        <p className="text-gray-500 text-center">
          &copy; {new Date().getFullYear()} PixelArcade. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2 text-center">
          PixelArcade is a fan-made project to preserve classic web games. Not affiliated with the original game developers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
