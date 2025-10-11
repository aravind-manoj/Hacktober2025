// pages/index.tsx

"use client";

import FaqItem from '@/components/buildup/FaqItem';
import React, { useState } from 'react';
import Image from 'next/image';
import localFont from "next/font/local";
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

const defaultQuestionText = faqData[3].question;

const HacktoberFaqPage: React.FC = () => {
	const [activeQuestion, setActiveQuestion] = useState(defaultQuestionText);

	const activeAnswer = faqData.find(item => item.question === activeQuestion)?.answer || 'Click a question!';

	const handleQuestionClick = (questionText: string) => {
		setActiveQuestion(questionText);
	};

	return (
		<main id="faq" className="min-h-[1400px] h-screen md:h-[1200px] lg:h-[1100px] xl:min-h-screen bg-[#28022E] text-white flex flex-col items-center py-12 px-6 relative pb-[200px]">
			<div className="w-full mx-auto">
				<div className="flex justify-center md:justify-end mb-6 w-full md:px-0 lg:px-[10%]">
					<h1 className={`text-6xl text-orange-600 md:p-5 ${infiniteBeyond.className}`}>
						FAQ'S
					</h1>
				</div>

				<div className="relative flex flex-col md:flex-row gap-4 items-center justify-between w-full md:px-0 lg:px-[10%]">
					{/* Left Column (Pumpkin and Speech Bubble) */}
					<div className="flex flex-col items-center md:mt-[-300px]">

						{/* 1. Pumpkin Image Container */}
						<div className="relative w-[300px] h-[300px] mb-[-30px] z-10">
							<Image
								src={pumpkinImage}
								alt="Hacktober Pumpkin"
								layout="fill"
								objectFit="contain"
							/>
						</div>

						{/* 2. Green Box Container (The Speech Bubble) */}
						<div
							className="relative bg-lime-500 text-black text-center text-xl font-bold px-10 py-10 rounded-xl shadow-xl max-w-[520px] w-[80%] transition-all duration-500 ease-in-out whitespace-pre-wrap mx-auto -mt-10 z-0"
						>
							{/* Speech Bubble Pointer (Tail) */}
							<div
								className="absolute left-1/2 top-0 w-0 h-0 border-x-[18px] border-x-transparent border-b-[25px] border-b-lime-500 transform -translate-x-1/2 -translate-y-full"
							/>

							{activeAnswer}
						</div>
					</div>

					{/* Right Column (FAQ List) */}
					<div className="w-[70%]">
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
			<Image
				src={"/assets/faq-item-1.svg"}
				width={800}
				height={200}
				alt="ground"
				className="w-full absolute bottom-0 left-0"
			/>
			<Image
				src={"/assets/faq-item-2.svg"}
				width={800}
				height={200}
				alt="ground"
				className="w-full absolute bottom-0 right-0"
			/>
		</main>
	);
};

export default HacktoberFaqPage;