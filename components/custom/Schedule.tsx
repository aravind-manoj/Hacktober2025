import React from "react";
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({ time, title, variant = "filled", color = "orange" }) => {
  const colorStyles = {
    orange: {
      filled: "bg-orange-500 text-black",
      outline: "bg-transparent border-2 border-orange-500 text-white",
      diagonalFill: "bg-orange-500"
    },
    lime: {
      filled: "bg-lime-400 text-black",
      outline: "bg-transparent border-2 border-lime-400 text-white",
      diagonalFill: "bg-lime-400"
    },
  };

  const cardStyle = colorStyles[color]?.[variant] || colorStyles.orange.filled;
  const diagonalColor = colorStyles[color]?.diagonalFill;

  return (
    <div className="relative">
      <div
        className={`p-6 rounded-l ${cardStyle} min-h-[200px] flex flex-col justify-between transition-all hover:scale-105 relative overflow-visible`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'
        }}
      >
        {/* Diagonal fill for outline cards */}
        {variant === "outline" && (
          <div
            className={`absolute top-0 right-0 ${diagonalColor}`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
              width: '43px',
              height: '43px',
              transform: 'translate(2px, -2px)'
            }}
          />
        )}

        <p className="text-sm font-medium opacity-80 relative z-10">{time}</p>
        {/* Added whitespace-pre-line here */}
        <h2 className="text-2xl font-bold relative z-10 whitespace-pre-line">{title}</h2>
      </div>
    </div>
  );
};

export default function EventSchedule() {
  const schedule = [
    { time: "09:00 AM - 10:00 AM", title: "Inauguration\n Ceremony", variant: "filled", color: "orange" },
    { time: "10:00 AM Onwards", title: "Hackathon\n Kick Off", variant: "outline", color: "lime" },
    { time: "10:00 AM - 11:00 PM", title: "CTF/RC Zone/\n Designathon", variant: "outline", color: "orange" },
    { time: "10:00 AM - 4:00 PM", title: "Start Up/\n Tech Expo", variant: "outline", color: "lime" },
    { time: "10:30 AM - 12:00 PM", title: "Talk\n Session", variant: "outline", color: "orange" },
    { time: "12:00 PM - 4:00 PM", title: "Under 25", variant: "filled", color: "lime" },
    { time: "1:00 PM - 2:00 PM", title: "CTF/RC Zone/\nDesignation", variant: "filled", color: "orange" },
    { time: "4:00 PM - 5:00 PM", title: "Hackathon\nSubmissions", variant: "filled", color: "lime" },
    { time: "6:00 PM - 9:00 PM", title: "Halloween\n Party", variant: "outline", color: "orange" },
  ];

  return (
    <main className="min-h-screen bg-[#0D000F] text-white flex flex-col items-center py-12 px-6">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-black text-lime-400 mb-8 text-center tracking-widest">
        EVENT SCHEDULE
      </h1>

      {/* Header Info */}
<div className="relative mb-10 max-w-6xl">
  {/* Outer wrapper preserves the rounded corners */}
  <div className="rounded-lg overflow-hidden">
    {/* Inner clipped layer keeps the diagonal */}
    <div
      className="flex flex-wrap gap-4 items-center justify-center text-sm md:text-base bg-orange-500 text-black px-6 py-3 font-semibold"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
      }}
    >
      <div className="flex items-center gap-2 relative z-10">
        <Calendar className="w-5 h-5" />
        <span>25th October 2025</span>
      </div>
      <div className="flex items-center gap-2 relative z-10">
        <MapPin className="w-5 h-5" />
        <span>Travancore International Convention Centre</span>
      </div>
    </div>
  </div>
</div>


      {/* Schedule Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {schedule.map((item, idx) => (
          <EventCard
            key={idx}
            time={item.time}
            title={item.title}
            variant={item.variant}
            color={item.color}
          />
        ))}
      </div>
    </main>
  );
}
