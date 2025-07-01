
import React from 'react';

interface AdPlaceholderProps {
  width: number;
  height: number;
  label: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height, label }) => {
  return (
    <div
      className="bg-brand-light/50 border-2 border-dashed border-gray-500 flex items-center justify-center"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center text-gray-400">
        <p className="font-bold">{label}</p>
        <p className="text-sm">{`${width} x ${height}`}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
