import Image from 'next/image';
import { Button } from "@/components/ui/button";
import customBtn_orange from "@/public/components/customBtn_orange.svg";
import customBtn_black from "@/public/components/customBtn_black.svg";

export default function CustomButton({ variant }: { variant: "dark" | "light" }) {
    return (
        <div className="flex-shrink-0">
            <Button className={`${ variant === "dark" ? "bg-gray-900 hover:bg-gray-800 text-orange-500" : "bg-orange-500 hover:bg-orange-400 text-gray-900"} font-bold pl-6 pr-2 py-7 rounded-full flex items-center space-x-3 transition-all duration-200 shadow-lg cursor-pointer`}>
                <span className="text-lg">Join Event</span>
                <div className={`${variant === "dark" ? "bg-orange-500 text-gray-900" : "bg-gray-900 text-orange-500"} rounded-full p-3`}>
                    {variant === "dark" ? 
                        <Image src={customBtn_black} width={24} height={24} alt="Join" /> :
                        <Image src={customBtn_orange} width={24} height={24} alt="Join" />
                    }
                </div>
            </Button>
        </div>
    )
}