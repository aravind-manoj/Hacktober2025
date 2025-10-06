// pages/index.tsx

"use client";

import FaqItem from '@/components/buildup/FaqItem';
import React, { useState } from 'react';
import Image from 'next/image'; 
import localFont from "next/font/local";
import background from "@/public/assets/faq-bg.png"; 
import pumpkinImage from "@/public/assets/xelly_logo_3 2.png"; 

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

interface FaqData {
  question: string;
  answer: string;
}

const faqData: FaqData[] = [
  { question: 'Chat is this real??', answer: 'duh?' },
  { question: 'What is Hacktober 2025?', answer: 'It’s Kerala’s first-ever Halloween-themed open-source fest mixing tech, culture, and pure vibes. 🎃💻' },
  { question: 'Who can Participate?', answer: 'Students, devs, startups, mentors; basically anyone who loves tech + fun.' },
  { question: 'How do I register?', answer: 'There should be a button somewhere up there. I am just a girl💅🏻' },
  { question: 'When and where is it?', answer: '25th Oct 2025, 9 AM @ Travancore International Convention Centre, Trivandrum.' },
  { question: 'Is there a fee?', answer: 'Yes :)' },
  { question: "What's happening there?", answer: 'Hackathon, CTF, robotics, startup expo, tech expo, gaming, Under25, and a full-on Halloween party. 🕹️👻' },
  { question: 'Food & stay?', answer: 'Food stalls = yes 🍔\nStay = no, sorry fam' },
  { question: 'What should I bring?', answer: 'Your phone, some money to buy stuff and maybe a spooky costume for halloween party if you’re in the mood.' },
  { question: 'Any prizes or certificates?', answer: 'Yesss - cash, gadgets, goodies + certificates for all participants. But not for freeee' },
];

// Default question is set to 'How do I register?' (index 3) to match the latest image content
const defaultQuestionText = faqData[3].question; 

const HacktoberFaqPage: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState(defaultQuestionText);
    
    // Find the answer corresponding to the active question
    const activeAnswer = faqData.find(item => item.question === activeQuestion)?.answer || 'Click a question!';

    const handleQuestionClick = (questionText: string) => {
        setActiveQuestion(questionText);
    };

    return (
        <div 
            className="bg-[#28022E] min-h-screen p-8 bg-cover bg-center bg-no-repeat"
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-end mb-6">
                    <h1 className={`text-6xl font-extrabold text-orange-600 ${infiniteBeyond.className}`}>
                        FAQ'S
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column (Pumpkin and Speech Bubble) */}
                    <div className="md:col-span-1 flex flex-col items-center">
                        
                        {/* 1. Pumpkin Image Container */}
                        {/* Positioned higher with z-10 for overlap */}
                        <div className="relative w-[300px] h-[300px] mb-[-30px] z-10"> 
                            <Image
                                src={pumpkinImage}
                                alt="Hacktober Pumpkin"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                        {/* 2. Green Box Container (The Speech Bubble) */}
                        {/* We use negative margin-top to pull it up closer to the pumpkin's body */}
                        <div 
                            className="relative bg-lime-500 text-black text-center text-xl font-bold px-10 py-10 rounded-xl shadow-xl max-w-[320px] transition-all duration-500 ease-in-out whitespace-pre-wrap mx-auto -mt-10 z-0"
                        >
                            {/* Speech Bubble Pointer (Tail) - REINTRODUCED */}
                            <div 
                                className="absolute left-1/2 top-0 w-0 h-0 border-x-[18px] border-x-transparent border-b-[25px] border-b-lime-500 transform -translate-x-1/2 -translate-y-full"
                            />
                            
                            {activeAnswer}
                        </div>
                    </div>

                    {/* Right Column (FAQ List) */}
                    <div className="md:col-span-2">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                onQuestionClick={handleQuestionClick} 
                                isActive={item.question === activeQuestion}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HacktoberFaqPage;