"use client"
import type React from "react"
// import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone } from "lucide-react"
import Local from "next/font/local";
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })
const Infinite = Local({ src: "../../app/fonts/infinite_beyond.ttf" })
const Hanuman = Local({ src: "../../app/fonts/hanuman.ttf" })

export default function ContactPage() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   inquiry: "",
  // })

  return (
    <div id="contact" className="min-h-screen bg-[#34043C] text-white">
      <div className="pt-12 pb-8">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#FF7620] tracking-[0.01em] ${Infinite.className}`}> 
          CONTACT
        </h1>
      </div>

      <div className="container mx-auto px-4 border-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="w-full h-full bg-transparent p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <h2 className={`text-4xl md:text-5xl text-white font-bold mb-4 ${Hanuman.className}`}>
                Get in <span className="text-[#FF7620]">Touch</span>
              </h2>
              <p className={`text-base  md:text-lg text-gray-300 leading-relaxed mb-6 font-semibold ${montserrat.className}`}>
                Reach out to the team behind the madness for questions,
                <br />
                collabs or inquiries - we don&apos;t bite (much)
              </p>
            </div>
            <form className={`space-y-4 ${Hanuman.className} flex flex-col items-start`}>
              <Input
                type="text"
                name="name"
                placeholder="Name *"

                required
                className="w-full md:w-2/3 h-12 bg-transparent border-2 border-gray-400/50 text-white placeholder:text-[#B0B0B0] f transition-colors rounded-lg px-4 py-3"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full md:w-2/3 h-12 bg-transparent border-2 border-gray-400/50 text-white placeholder:text-[#B0B0B0]  transition-colors rounded-lg px-4 py-3"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                required
                className="w-full md:w-2/3 h-12 bg-transparent border-2 border-gray-400/50 text-white placeholder:text-[#B0B0B0]  transition-colors rounded-lg px-4 py-3"
              />
              <Input
                type="text"
                name="inquiry"
                placeholder="What is your inquiry"
                className="w-full md:w-2/3 h-12 bg-transparent border-2 border-purple-400/50 text-white placeholder:text-[#B0B0B0] transition-colors rounded-lg px-4 py-3"
              />
              <Button
                type="submit"
                className="bg-[#FF6200] h-12 w-full md:w-2/3 hover:bg-[#FF8A40] text-black font-bold px-12 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105"
              >
                SEND
              </Button>
            </form>
          </div>

          <div className="w-full h-[400px] lg:h-full min-h-[350px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4622776506726!2d76.72351987585408!3d9.72685197767355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1759766590920!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>

        <div className="relative flex items-center justify-center my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-[0.5px] border border-black" />
          </div>
          <div className="relative bg-[#34043C] px-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <h1 className="font-semibold">OR</h1>
            </div>
          </div>
        </div>

  <div className={`flex flex-col  lg:flex-row gap-8 lg:gap-12 mb-8 items-center lg:items-start justify-center ${Hanuman.className}`}>
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FF7620] mb-4 text-center">Primary Organizer</h3>
           <Card className="contact-scalee w-[80vw] lg:w-[20vw] md:w-[35vw] max-w-lg lg:max-w-xl xl:max-w-2xl h-60 bg-black/40 contact-bg p-6 border-none rounded-2xl relative overflow-hidden hover:border-[#FF7620]/50 transition-all duration-300">
              <div className="space-y-4 relative z-10">
                <h4 className="text-xl font-bold text-[#AB54BA] text-center">Tomson J Finosh.</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4" color="#ffffff" />
                    <span className="text-gray-300">tj16279@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 " color="#ffffff" />
                    <span className="text-gray-300">9895292919</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FF7620] mb-4 text-center">Alternate Contacts</h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Card className="contact-scalee w-[80vw] lg:w-[20vw] md:w-[35vw] max-w-lg lg:max-w-xl xl:max-w-2xl h-60 bg-black/40 contact-bg p-6 border-none rounded-2xl relative overflow-hidden hover:border-[#FF7620]/50 transition-all duration-300">
                <div className="space-y-4 relative z-10">
                  <h4 className="text-xl font-bold text-[#AB54BA] text-center">Vaishnav A Nair.</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4" color="#ffffff" />
                      <span className="text-gray-300">vaishnavanair@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4" color="#ffffff" />
                      <span className="text-gray-300">9400468722</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="contact-scalee w-[80vw] lg:w-[20vw] md:w-[35vw] max-w-lg lg:max-w-xl xl:max-w-2xl h-60 bg-black/40 contact-bg p-6 border-none rounded-2xl relative overflow-hidden hover:border-[#FF7620]/50 transition-all duration-300">
                <div className="space-y-4 relative z-10">
                  <h4 className="text-xl font-bold text-[#AB54BA] text-center">Tims Tittus</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4" color="#ffffff"  />
                      <span className="text-gray-300">timstittus1@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone color="#ffffff"  className="w-4 h-4 " />
                      <span className="text-gray-300">9946116910</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}