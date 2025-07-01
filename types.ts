
export interface Game {
  slug: string;
  title: string;
  description: string;
  instructions: string;
  thumbnailUrl: string;
  type: 'swf' | 'html5';
  gameFile: string;
  category: string;
  tags: string[];
  plays: number;
  featured?: boolean;
}

export interface Comment {
  id: number;
  avatarUrl: string;
  username: string;
  text: string;
  timestamp: string;
}
