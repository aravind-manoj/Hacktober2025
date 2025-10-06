// pages/contact.tsx

"use client";

import React from 'react';
import ContactCard from '@/components/buildup/ContactCard';
// Removed unused Image import from this block

// Assuming paths for your resources
import background from "@/public/assets/faq-bg.png"; // Main body background


// --- Contact Data (remains the same and accessible) ---
const primaryContact = {
  name: 'Tomson J Finosh',
  title: 'Primary Organizer',
  email: 'tjj5279@gmail.com',
  phone: '9895329319',
};

const alternateContacts = [
  {
    name: 'Vaishnav A Nair',
    email: 'vaishnavanair@gmail.com',
    phone: '9400468722',
  },
  {
    name: 'Tims Tittus',
    email: 'timstittus1@gmail.com',
    phone: '9946116910',
  },
];
// --- End Contact Data ---


// --- NEW: Map Embed HTML ---
const mapIframeHtml = `<div style="width: 100%"><iframe width="720" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&height=600&hl=en&q=PPHG+4GR,%20Bharananganam%20Pravithanam%20Road%20Kottayam,%20Palai,%20Choondacherry,%20Kerala%20686579+(St%20Joseph's%20College%20of%20Engineering%20and%20Technology)&t=&z=14&ie=UTF8&iwloc=B&output=embed"><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">mappa della popolazione Italia</a></iframe></div>`;
// --- END Map Embed HTML ---


const ContactPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen p-8 bg-[#34043C]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- CORRECTED: Main Header (CONTACT) --- */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-extrabold text-orange-600 tracking-wider [text-shadow:_3px_3px_5px_rgb(0_0_0_/_0.5)]">
            CONTACT
          </h1>
        </div>
        {/* -------------------------------------- */}

        {/* --- Top Section: Form and Map --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          
          {/* Left Column: Intro and Form */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-extrabold">
              Get in <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-lg">
              Reach out to the team behind the madness for questions, collabs or inquiries - we don't bite (much)
            </p>

            <form className="space-y-4 max-w-md">
              <input type="text" placeholder="Name *" className="w-full p-4 bg-purple-900/50 border-2 border-purple-900/50 rounded text-white focus:ring-orange-600 focus:border-orange-600 outline-none transition duration-200" required />
              <input type="email" placeholder="Email" className="w-full p-4 bg-purple-900/50 border-2 border-purple-900/50 rounded text-white focus:ring-orange-600 focus:border-orange-600 outline-none transition duration-200" />
              <input type="tel" placeholder="Phone number *" className="w-full p-4 bg-purple-900/50 border-2 border-purple-900/50 rounded text-white focus:ring-orange-600 focus:border-orange-600 outline-none transition duration-200" required />
              <input type="text" placeholder="What is your inquiry" className="w-full p-4 bg-purple-900/50 border-2 border-purple-900/50 rounded text-white focus:ring-orange-600 focus:border-orange-600 outline-none transition duration-200" />
              <button type="submit" className="w-full p-4 bg-orange-600 text-white font-bold text-xl rounded shadow-lg hover:bg-orange-700 transition duration-200">SEND</button>
            </form>
          </div>

          {/* Right Column: Map Embed */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-4">
            <div 
              className="w-full h-full min-h-[400px] relative"
              dangerouslySetInnerHTML={{ __html: mapIframeHtml }}
            />
          </div>
        </div>

        {/* --- Separator and Contact Cards --- */}
        
        <p className="text-white text-center text-2xl font-semibold my-8">
            or
        </p>
        <hr className="border-t border-purple-900 mb-8" /> 


        {/* Contact Headings (Alignment Correction) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">
            {/* Primary Organizer: Occupies 1 column, left-aligned like the card */}
            <h3 className="text-3xl font-extrabold text-orange-600">{primaryContact.title}</h3>
            
            {/* Alternate Contacts: Occupies 2 columns, centered over those columns */}
            <div className="col-span-2 text-center">
                <h3 className="text-3xl font-extrabold text-orange-600">Alternate Contacts</h3>
            </div>
        </div>

        {/* Contact Cards Grid (1/3, 1/3, 1/3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1: Primary Organizer */}
          <ContactCard
            name={primaryContact.name}
            email={primaryContact.email}
            phone={primaryContact.phone}
          />

          {/* Card 2 & 3: Alternate Contacts */}
          <ContactCard
            name={alternateContacts[0].name}
            email={alternateContacts[0].email}
            phone={alternateContacts[0].phone}
          />
          <ContactCard
            name={alternateContacts[1].name}
            email={alternateContacts[1].email}
            phone={alternateContacts[1].phone}
          />
        </div>

      </div>
    </div>
  );
};

export default ContactPage;