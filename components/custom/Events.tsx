// components/EventsPage.tsx
import React from 'react';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl font-bold text-center mb-12 text-white">
          EVENTS
        </h1>

        <div className="space-y-12">
          {/* Hackathon Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Hackathon</h2>
            <p className="text-xl text-gray-300">
              100 participants and 50k pool, 8 hours and 20 teams
            </p>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Rules</h3>
              <ul className="space-y-1 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Team of 4</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bring up laptops and chargers and some spooky vibe too.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Per head 300</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTF Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">CTF</h2>
            <p className="text-xl text-gray-300">
              50 participants and 20k pool
            </p>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Rules</h3>
              <ul className="space-y-1 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Solo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bring up laptops and chargers and sherlock minds.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Per head 300</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RC Zone Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">RC Zone</h2>
            <p className="text-xl text-gray-300">
              Details Posting Soon!
            </p>
          </div>

          {/* Tech & Startup Expo Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Tech & Startup Expo</h2>
            <ul className="space-y-1 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>16 startups and 4 tech expos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Details will be announced</span>
              </li>
            </ul>
          </div>

          {/* Talk Sessions Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Talk Sessions</h2>
            <p className="text-xl text-gray-300">
              Details Posting Soon!
            </p>
          </div>

          {/* Halloween Party Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Halloween Party</h2>
            <ul className="space-y-1 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Games</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fashion Show</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>DJ</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Food Stalls</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Shops etc...</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;