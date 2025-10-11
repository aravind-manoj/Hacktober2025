"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

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
  url: string;
}

function TicketCard({ heading, price, perks, isSpecial = false, url }: TicketCardProps) {
  return (
    <Link href={url} className="flex rounded-lg bg-black p-5 h-[450px] w-[320px] m-2 z-10">
      <div className={`rounded-tr-[100px] rounded-bl-[100px] ${isSpecial ? 'bg-gradient-to-br from-[#FF6B35] to-[#F7931E]' : 'bg-[#62FF00]'} flex-1 w-full border-8 ${isSpecial ? 'border-[#FF4500]' : 'border-[#69D228]'} p-6 flex flex-col justify-center items-center`}>
        <div className="text-center mb-6">
          <h2 className={`${hanuman.className} text-xl text-[#2B0032] mb-3`}>
            {heading}
          </h2>
          <div className={`${infiniteBeyond.className} text-4xl tracking-widest text-[#2B0032]`}>
            ₹{price}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center w-full">
          <h3 className={`${hanuman.className} text-lg text-[#2B0032] mb-3 text-center`}>
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
    </Link>
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
      ],
      url: "https://makemypass.com/event/hacktober-2025?ticket_id=c334896c-1631-4d4f-a776-071142b17a86"
    },
    {
      heading: "REGULAR + HALLOWEEN",
      price: "300",
      perks: [
        "Everything in Regular ticket",
        "Exclusive Halloween Party Entry",
        "Costume Contest Participation",
        "Special Halloween Activities"
      ],
      url: "https://makemypass.com/event/hacktober-2025?ticket_id=cc23d2c9-c700-4248-93f4-7ab1eec1e73c"
    },
    {
      heading: "REGULAR + COMMUNITY",
      price: "300",
      perks: [
        "Everything in Regular ticket",
        "Hackathon Competition Entry",
        "Designathon Challenge Access",
        "CTF & RC Zone Activities"
      ],
      url: "https://makemypass.com/event/hacktober-2025?ticket_id=faaea7f8-016c-4e86-8fa2-599fc68caf51"
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
      isSpecial: true,
      url: "https://makemypass.com/event/hacktober-2025?ticket_id=323fb8e1-9b0d-4d26-bb64-b74ae4d7aa86"
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
      isSpecial: true,
      url: "https://makemypass.com/event/hacktober-2025?ticket_id=062f4350-2590-418a-be61-cf2a5861a90a"
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
      isSpecial: true,
      url: "https://makemypass.com/event/hacktober-2025?ticket_id=0c3ad450-0923-43a5-9864-0573e7e26b43"
    }
  ];

  return (
    <section className="bg-[#34043C] w-full min-h-screen h-fit relative overflow-hidden pb-[200px]">
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
              url={ticket.url}
            />
          ))}
        </div>
      </div>

      <Image
        src={"/assets/events-item-4.svg"}
        width={300}
        height={300}
        alt="Village"
        className="absolute w-0 md:w-full left-0 bottom-0 xl:top-0 animate-pulse"
      />
      <Image
        src={"/assets/events-item-3.svg"}
        width={300}
        height={300}
        alt="Village"
        className="absolute w-0 md:w-[20vw] max-w-xl bottom-[9vw] left-10 z-10"
      />
      <div className="absolute w-0 h-0 md:w-[20vw] max-w-xl md:h-fit right-0 bottom-[7vw] z-10">
        <div className="relative">
          <Image
            src={"/assets/objects/events/witch.svg"}
            width={300}
            height={300}
            alt="Witch"
            className="absolute right-0 bottom-0"
          />
          <Image
            src={"/assets/objects/events/bat-1.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-24 right-0 bottom-[33vw] min-[1500px]:bottom-[495px] animate-alive-motion-3"
          />
          <Image
            src={"/assets/objects/events/bat-3.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-24 right-[50px] bottom-[36vw] min-[1500px]:bottom-[540px] animate-alive-motion-2"
          />
          <Image
            src={"/assets/objects/events/bat-3.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-24 right-0 bottom-[28vw] min-[1500px]:bottom-[420px] animate-alive-motion-1"
          />
          <Image
            src={"/assets/objects/events/bat-4.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-24 right-[90px] bottom-[31vw] min-[1500px]:bottom-[465px] animate-alive-motion-1"
          />
          <Image
            src={"/assets/objects/events/bat-5.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-20 right-[150px] bottom-[34vw] min-[1500px]:bottom-[510px] animate-alive-motion-2"
          />
          <Image
            src={"/assets/objects/events/bat-6.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-20 right-[200px] bottom-[36vw] min-[1500px]:bottom-[540px] animate-alive-motion-3"
          />
          <Image
            src={"/assets/objects/events/bat-7.svg"}
            width={300}
            height={300}
            alt="Bat"
            className="absolute w-16 right-[240px] bottom-[33vw] min-[1500px]:bottom-[495px] animate-alive-motion-1"
          />
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