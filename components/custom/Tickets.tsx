"use client";
import localFont from "next/font/local";
import Image from "next/image";

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

const hanuman = localFont({
  src: "../../app/fonts/hanuman.ttf"
})

interface TicketCardProps {
  heading: string;
  price: string;
  perks: string[];
  isSpecial?: boolean;
}

function TicketCard({ heading, price, perks, isSpecial = false }: TicketCardProps) {
  return (
    <div className="flex rounded-md bg-black p-3 h-[450px] w-[320px] m-2 z-10">
      <div className={`rounded-tr-[100px] rounded-bl-[100px] ${isSpecial ? 'bg-gradient-to-br from-[#FF6B35] to-[#F7931E]' : 'bg-[#62FF00]'} flex-1 w-full border-8 ${isSpecial ? 'border-[#FF4500]' : 'border-[#69D228]'} p-6 flex flex-col justify-center items-center`}>
        <div className="text-center mb-6">
          <h2 className={`${hanuman.className} text-xl text-[#2B0032] font-bold mb-3`}>
            {heading}
          </h2>
          <div className={`${infiniteBeyond.className} text-4xl text-[#2B0032] font-bold`}>
            ₹{price}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center w-full">
          <h3 className={`${hanuman.className} text-lg text-[#2B0032] font-semibold mb-3 text-center`}>
            What's Included:
          </h3>
          <ul className="space-y-2 text-center">
            {perks.map((perk, index) => (
              <li key={index} className={`${hanuman.className} text-sm text-[#2B0032] leading-relaxed`}>
                ✓ {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Tickets() {
  const ticketData = [
    {
      heading: "REGULAR",
      price: "250",
      perks: [
        "Access to Startup & Tech Expo",
        "Interactive Games & Activities",
        "Food Stalls & Refreshments",
        "Main Stage Performances",
        "Opening Ceremony",
        "Expert Talk Sessions",
        "Under25 Special Events"
      ]
    },
    {
      heading: "REGULAR + HALLOWEEN",
      price: "300",
      perks: [
        "Everything in Regular ticket",
        "Exclusive Halloween Party Entry",
        "Costume Contest Participation",
        "Special Halloween Activities"
      ]
    },
    {
      heading: "REGULAR + COMMUNITY",
      price: "300",
      perks: [
        "Everything in Regular ticket",
        "Hackathon Competition Entry",
        "Designathon Challenge Access",
        "CTF & RC Zone Activities"
      ]
    },
    {
      heading: "HALLOWEEN ONLY",
      price: "350",
      perks: [
        "Halloween Party Access Only",
        "Perfect for Evening Fun",
        "Costume Contest Entry",
        "Special Halloween Treats"
      ],
      isSpecial: true
    },
    {
      heading: "FULL ACCESS PASS",
      price: "399",
      perks: [
        "Complete Festival Experience",
        "All Main Events & Activities",
        "Halloween Party Access",
        "Community Events Entry",
        "Best Value Package!"
      ],
      isSpecial: true
    },
    {
      heading: "ENTHUSIASTS",
      price: "450",
      perks: [
        "Premium Non-Student Pass",
        "All Regular Event Access",
        "Halloween Party Included",
        "Networking Opportunities",
        "VIP Experience"
      ],
      isSpecial: true
    }
  ];

  return (
    <section className="bg-[#2b0032] w-full min-h-screen h-fit relative overflow-hidden">
      <div className="flex flex-col w-full gap-4 pb-12">
        <h1 className={`text-5xl md:text-7xl ${infiniteBeyond.className} text-[#62FF00] mx-4 text-center mt-14 mb-8`}>
          Tickets
        </h1>

        <div className="flex flex-wrap justify-center items-start gap-4 px-6">
          {ticketData.map((ticket, index) => (
            <TicketCard
              key={index}
              heading={ticket.heading}
              price={ticket.price}
              perks={ticket.perks}
              isSpecial={ticket.isSpecial}
            />
          ))}
        </div>
      </div>

      {/* Ground Decoration */}
      <Image
        src={"/assets/events-item-1.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
      <Image
        src={"/assets/events-item-2.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 right-0"
      />
    </section>
  )
}