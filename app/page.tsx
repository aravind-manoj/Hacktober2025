import Image from "next/image";
import Navbar from "@/components/custom/navbar";

export default function Home() {
  return (
    <div className="bg-[url('/assets/hero.png')] bg-cover bg-center w-full h-screen">
      <Navbar />
    </div>
  );
}
