
import React, { useState } from 'react';
import { Comment } from '../types';

const staticComments: Comment[] = [
  {
    id: 1,
    avatarUrl: 'https://picsum.photos/seed/avatar1/48/48',
    username: 'PixelPioneer',
    text: 'This game is a true classic! Brings back so many memories from 2004.',
    timestamp: '3 days ago',
  },
  {
    id: 2,
    avatarUrl: 'https://picsum.photos/seed/avatar2/48/48',
    username: 'FlashFan2005',
    text: 'My high score is 58,200! Can anyone beat that? Such a fun game.',
    timestamp: '1 day ago',
  },
  {
    id: 3,
    avatarUrl: 'https://picsum.photos/seed/avatar3/48/48',
    username: 'GamerX',
    text: 'Stuck on level 5, any tips? The boss is super hard!',
    timestamp: '5 hours ago',
  },
];

const CommentsSection: React.FC = () => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log('New comment submitted:', newComment);
      // In a real app, this would be sent to a server and update the comments list.
      setNewComment('');
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-700">
      <h3 className="text-2xl font-press-start text-brand-accent mb-6">Comments</h3>
      
      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full bg-brand-light rounded-lg p-4 text-gray-200 focus:ring-2 focus:ring-brand-accent focus:outline-none transition"
          rows={3}
          placeholder="Share your thoughts or high score..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-brand-accent text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-300"
        >
          Submit Comment
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-6">
        {staticComments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4">
            <img src={comment.avatarUrl} alt={comment.username} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <div className="flex items-baseline space-x-2">
                <p className="font-bold text-pink-400">{comment.username}</p>
                <p className="text-xs text-gray-500">{comment.timestamp}</p>
              </div>
              <p className="text-gray-300 mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
