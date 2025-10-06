// components/EventCard.tsx

import React from 'react';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  details: string; 
  iconSrc: string; 
  isHighlighted?: boolean; 
}

const EventCard: React.FC<EventCardProps> = ({ title, details, iconSrc, isHighlighted = false }) => {
  
  // Style calculation for the card border and shadow
  const highlightClasses = isHighlighted 
    ? 'ring-4 ring-yellow-400 shadow-yellow-400/80' // Strong yellow highlight ring and shadow
    : 'shadow-lime-500/50'; // Default subtle green shadow

  return (
    <div
      className={`relative bg-lime-500 text-black p-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.03]
                  border-4 border-lime-500 // Base border is same color as background
                  ${highlightClasses} 
                  min-h-[250px] flex flex-col`}
    >
      {/* Pumpkin Icon / Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-extrabold uppercase [text-shadow:_1px_1px_3px_rgb(0_0_0_/_0.5)]">
          {title}
        </h2>
        
        {/* Placeholder for event-specific pumpkin icon */}
        <div className="w-8 h-8 relative">
          <Image
            src={iconSrc} 
            alt={`${title} Icon`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <hr className="border-t-2 border-black mb-3" />

      {/* Details / Content */}
      <div className="flex-grow text-sm font-semibold whitespace-pre-wrap">
        <p dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    </div>
  );
};

export default EventCard;