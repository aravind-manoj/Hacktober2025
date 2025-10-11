"use client";
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";
import { useIsMobile } from "@/lib/hooks/mobile";

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

const EventCard = ({ time, title, variant = "filled", color = "orange" }: {
  time: string,
  title: string,
  variant: string,
  color: string
}) => {
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

  //@ts-ignore
  const cardStyle = colorStyles[color]?.[variant] || colorStyles.orange.filled;
  //@ts-ignore
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

        <p className="text-sm font-medium opacity-80 relative z-11">{time}</p>
        {/* Added whitespace-pre-line here */}
        <h2 className="text-2xl relative z-11 whitespace-pre-line">{title}</h2>
      </div>
    </div>
  );
};

export default function EventSchedule() {
  const isMobile = useIsMobile();
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

    
    <main id="schedule" className="min-h-screen bg-[#0D000F] text-white flex flex-col items-center py-12 px-6 relative pb-[200px]">
      {/* Title */}
      
      <div>
        {isMobile ? (
          
          <div>
            <h1 className={`text-4xl md:text-5xl/normal text-[#62FF00] mb-8 text-center tracking-widest relative z-11 ${infiniteBeyond.className}`}>
        EVENT SCHEDULE
            </h1>
          </div>
        ) : (
          <div>
            <h1 className={`text-5xl md:text-7xl font-black text-lime-400 mb-8 text-center tracking-widest relative z-11 ${infiniteBeyond.className}`}>
        EVENT SCHEDULE
            </h1>
          </div>
        )}
      </div>

      {/* Header Info */}
      <div className="relative mb-10 max-w-6xl z-10">
        {/* Outer wrapper preserves the rounded corners */}
        <div className="rounded-lg overflow-hidden">
          {/* Inner clipped layer keeps the diagonal */}
          <div
            className="flex flex-wrap gap-4 items-center justify-center text-sm md:text-base bg-orange-500 text-black px-6 py-3 "
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
            }}
          >
            <div className="flex items-center gap-2 relative z-11">
              <Calendar className="w-5 h-5" />
              <span>25th October 2025</span>
            </div>
            <div className="flex items-center gap-2 relative z-11">
              <MapPin className="w-5 h-5" />
              <span>Travancore International Convention Centre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark clouds scattered widely */}
      <img src="/assets/dark_cloud.svg" className="absolute z-9 top-10 left-4" />
      <img src="/assets/dark_cloud.svg" className="absolute z-9 top-20 right-8" />
      <img src="/assets/dark_cloud.svg" className="absolute z-9 top-1/3 left-1/4" />
      <img src="/assets/dark_cloud.svg" className="absolute z-9 top-2/3 right-1/4" />
      <img src="/assets/dark_cloud.svg" className="absolute z-9 bottom-32 left-8" />
      <img src="/assets/dark_cloud.svg" className="absolute z-9 bottom-20 right-12" />


      {/* Schedule Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full z-11">
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

      <Image
        src={"/assets/schedule-item-3.svg"}
        width={300}
        height={300}
        alt="Skeleton"
        className="absolute w-0 md:w-[14vw] max-w-64 bottom-[7vw] left-0 z-10"
      />
      <Image
        src={"/assets/schedule-item-4.svg"}
        width={300}
        height={300}
        alt="Skeleton"
        className="absolute w-0 md:w-[25vw] max-w-64 bottom-[7vw] right-0 z-10"
      />
      <Image
        src={"/assets/schedule-item-1.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
      <Image
        src={"/assets/schedule-item-2.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 right-0"
      />
    </main>
  );
}
