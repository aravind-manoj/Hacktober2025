// pages/contact.tsx

"use client";

import React from 'react';
import ContactCard from '@/components/buildup/ContactCard';
import localFont from 'next/font/local';

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

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
const mapIframeHtml = `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Travancore International Convention Centre&t=&z=17&ie=UTF8&iwloc=B&output=embed"></iframe><a href="https://embedgooglemap.xyz/">embed google map</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>`;
// --- END Map Embed HTML ---


const ContactPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen p-8 bg-[#34043C]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- Main Header (CONTACT) --- */}
        <div className="text-center mb-16">
          <h1 className={`text-7xl font-extrabold text-orange-600 tracking-wider ${infiniteBeyond.className}`}>
            CONTACT
          </h1>
        </div>
        
        {/* --- Top Section: Form and Map --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          
          {/* Left Column: Intro and Form */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-extrabold ">
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


        {/* --- Responsive Contact Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Primary Organizer Section */}
          <div className="col-span-1 flex flex-col items-center md:items-start"> {/* Align text differently on small vs medium */}
            <h3 className="text-3xl font-extrabold text-orange-600 mb-4 text-center md:text-left">
                {primaryContact.title}
            </h3>
            <ContactCard
              name={primaryContact.name}
              email={primaryContact.email}
              phone={primaryContact.phone}
            />
          </div>

          {/* Alternate Contacts Section (Spans two columns on md and up) */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start"> {/* Align text differently on small vs medium */}
            <h3 className="text-3xl font-extrabold text-orange-600 mb-4 text-center md:text-left">
                Alternate Contacts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"> {/* Inner grid for the two alternate cards */}
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
        {/* --- End Responsive Contact Cards Section --- */}

      </div>
    </div>
  );
};

export default ContactPage;