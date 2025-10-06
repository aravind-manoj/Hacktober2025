// components/ContactCard.tsx

import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
  // All other visual props removed
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone }) => {
  return (
    // Card background: Deep purple, simple shadow
    <div className="bg-[#41126e] p-6 rounded-xl shadow-2xl h-full">
      
      <div className="relative z-10 space-y-4 text-left"> {/* LEFT-ALIGNED CONTENT */}
        {/* Name */}
        {/* Font size/weight adjustment */}
        <h3 className="text-2xl font-extrabold text-white pb-1 mb-4 border-b border-orange-600">
          {name}
        </h3>
        
        {/* Contact Details (Left-aligned) */}
        <div className="space-y-4 text-white mt-8">
          <div className="flex items-center text-lg"> 
            <EnvelopeIcon className="w-5 h-5 text-orange-600 mr-3" />
            <span>Email : {email}</span>
          </div>
          <div className="flex items-center text-lg">
            <PhoneIcon className="w-5 h-5 text-orange-600 mr-3" />
            <span>Phone : {phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;