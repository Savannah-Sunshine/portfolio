"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const interests = [
	{
		label: "🥾 Hiking",
		details: "I think I officially deserve the title of one of the hikiest-hikers :) I hiked the PCT in 2025, walking 500 miles starting on the border of Mexico and California. My weekend plans are often hiking the closest mountain or trail.",
	},
	{
		label: "🇫🇮 Finnish",
		details: "I speak Finnish, and at one time almost fluently. During covid, I spent a year living in the cities of Helsinki and Jyväskylä.",
	},
	{
		label: "📷 Macro Photography",
		details: "I love taking photos of very very small things, they make great wallpapers and backgrounds!",
	},
];

export default function InterestsPage() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col sm:flex-row items-center justify-center min-h-screen px-4 mx-auto gap-8">
				{/* Interest cards w/ woooords*/}
				<div className="grid w-full max-w-2xl grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:grid-cols-1 lg:gap-4 p-4">
					{interests.map((s) => (
						<Card key={s.label}>
								{/* Text */}
								<div className="z-10 flex flex-col items-center p-4">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-green-500 font-display text-center">
										{s.label}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-green-200">
										{s.details}
									</span>
								</div>
						</Card>
					))}
				</div>
				{/* Background picture, contained within a specific area */}
				<div className="relative z-0 max-w-md mx-auto">
					<img
						src="PCT.png"
						alt="Savannah hiking the PCT"
						className="object-contain w-full h-auto rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
}
