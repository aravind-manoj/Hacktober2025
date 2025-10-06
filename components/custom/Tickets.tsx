"use client";
import localFont from "next/font/local";
import Image from "next/image";

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

function TicketCard(){
  return (
    <div className="flex flex-col rounded-md bg-black p-3 h-[400px]">
      <div className="rounded-tr-2xl rounded-bl-2xl bg-[#62FF00] h-full w-full">

      </div>
    </div>
  )
}

export default function Tickets(){
  return (
    <div className="flex flex-col bg-[#2b0032] w-full min-h-screen gap-4">
      <h1 className={`text-5xl md:text-7xl ${infiniteBeyond.className} text-[#62FF00] mx-4 text-center mt-14`}>Tickets</h1>

      <div className="flex flex-col p-6">
        <TicketCard/>
      </div>
    </div>
  )
}