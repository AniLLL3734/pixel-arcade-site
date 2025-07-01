// data/games.ts
import { Game } from '../types';

export const games: Game[] = [
  // --- SWF Games (Kendi Sunucumuzdan) ---
  {
    slug: 'alien-hominid',
    title: 'Alien Hominid',
    description: 'The classic run-and-gun indie game that started it all. Defend your crashed UFO from waves of FBI agents in this fast-paced shooter.',
    instructions: 'Use Arrow Keys to move, \'A\' to shoot, and \'S\' to jump.',
    thumbnailUrl: '/thumbnails/alien-hominid.jpg', // GERÇEK RESİM YOLU
    type: 'swf',
    gameFile: '/games/alien-hominid.swf', // GERÇEK OYUN DOSYASI YOLU
    category: 'Action',
    tags: ['classic', 'run-and-gun', 'shooter', 'newgrounds'],
    plays: 1250321,
    featured: true,
  },
  {
    slug: 'line-rider',
    title: 'Line Rider',
    description: 'A cult classic physics-based sandbox game. Draw your own tracks and send Bosh on a wild ride. Unleash your creativity!',
    instructions: 'Use your mouse to draw tracks. Click the Play button to start the simulation.',
    thumbnailUrl: '/thumbnails/line-rider.jpg', // GERÇEK RESİM YOLU
    type: 'swf',
    gameFile: '/games/line-rider.swf', // GERÇEK OYUN DOSYASI YOLU
    category: 'Puzzle',
    tags: ['physics', 'sandbox', 'mouse-only', 'creative'],
    plays: 3450678,
  },
  {
    slug: 'heli-attack-2',
    title: 'Heli Attack 2',
    description: 'Survive for as long as you can against relentless waves of attack helicopters and soldiers in this intense side-scrolling shooter.',
    instructions: 'Use Arrow keys to move, Spacebar to shoot, and Shift to switch between a variety of cool weapons.',
    thumbnailUrl: '/thumbnails/heli-attack-2.jpg', // GERÇEK RESİM YOLU
    type: 'swf',
    gameFile: '/games/heli-attack-2.swf', // GERÇEK OYUN DOSYASI YOLU
    category: 'Action',
    tags: ['shooter', 'survival', 'helicopter', 'keyboard'],
    plays: 987123,
  },
  {
    slug: 'the-last-stand',
    title: 'The Last Stand',
    description: 'Defend your barricade against hordes of the undead. Survive the day, then search for supplies and other survivors at night.',
    instructions: 'WASD to move during search phases. Use your mouse to aim and shoot to defend your barricade. R to reload.',
    thumbnailUrl: '/thumbnails/the-last-stand.jpg', // GERÇEK RESİM YOLU
    type: 'swf',
    gameFile: '/games/the-last-stand.swf', // GERÇEK OYUN DOSYASI YOLU
    category: 'Strategy',
    tags: ['zombies', 'survival', 'tower-defense', 'armor-games'],
    plays: 2109456,
  },
  {
    slug: 'portal-the-flash-version', // SEO için daha iyi
    title: 'Portal: The Flash Version',
    description: 'A brilliant 2D puzzle platformer based on Valve\'s hit game, Portal. Solve complex puzzles by thinking with portals!',
    instructions: 'Use WASD to move and jump. Use your mouse to aim and click to shoot portals.',
    thumbnailUrl: '/thumbnails/portal-flash.jpg', // GERÇEK RESİM YOLU
    type: 'swf',
    gameFile: '/games/portal-flash.swf', // GERÇEK OYUN DOSYASI YOLU
    category: 'Puzzle',
    tags: ['platformer', 'physics', 'mind-bending', 'portal'],
    plays: 1876543,
  },

  // --- HTML5 Games (Harici Sitelerden Gömülü) ---
  // Bunlar için dosya indirmen gerekmiyor, iframe ile doğrudan çalışırlar.
  {
    slug: '2048',
    title: '2048',
    description: 'An elegant and addictive puzzle game. Use your arrow keys to slide tiles and combine them to create the 2048 tile.',
    instructions: 'Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!',
    thumbnailUrl: '/thumbnails/2048.jpg', // GERÇEK RESİM YOLU
    type: 'html5',
    gameFile: 'https://play2048.co/', // GÖMÜLECEK DIŞ LİNK
    category: 'Puzzle',
    tags: ['math', 'logic', 'minimalist', 'keyboard'],
    plays: 5890123,
    featured: true,
  },
  {
    slug: 'cookie-clicker',
    title: 'Cookie Clicker',
    description: 'The legendary idle game that started a genre. Bake cookies by clicking, then use them to build your cookie empire.',
    instructions: 'Click the giant cookie. Spend cookies to buy buildings and upgrades that bake for you. Repeat... forever.',
    thumbnailUrl: '/thumbnails/cookie-clicker.jpg', // GERÇEK RESİM YOLU
    type: 'html5',
    gameFile: 'https://orteil.dashnet.org/cookieclicker/', // GÖMÜLECEK DIŞ LİNK
    category: 'Strategy',
    tags: ['idle', 'clicker', 'addictive', 'mouse-only'],
    plays: 8765432,
    featured: true,
  },
  {
    slug: 'little-alchemy-2',
    title: 'Little Alchemy 2',
    description: 'Start with four basic elements - air, earth, fire, and water. Combine them to discover hundreds of new items, from dinosaurs to unicorns!',
    instructions: 'Drag and drop elements from the sidebar onto each other in the workspace to see if they create something new.',
    thumbnailUrl: '/thumbnails/little-alchemy-2.jpg', // GERÇEK RESİM YOLU
    type: 'html5',
    gameFile: 'https://littlealchemy2.com/', // GÖMÜLECEK DIŞ LİNK
    category: 'Puzzle',
    tags: ['crafting', 'sandbox', 'discovery', 'mouse-only'],
    plays: 4567890,
  },
];