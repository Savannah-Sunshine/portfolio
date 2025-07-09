import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Github} from "lucide-react";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contacts", href: "/contacts" },
	{ name: "Interests", href: "/interests" },
];

const coding_languages = [
	{ label: "Python", icon: <Github/> },
	{ label: "JavaScript", icon: <Github/> },
	{ label: "TypeScript", icon: <Github/> },
	{ label: "Java", icon: <Github/> },
	{ label: "C++", icon: <Github/> },
	{ label: "Rust", icon: <Github/> },
];

const frameworks = [
	{ label: "React", icon: <Github/> },
	{ label: "Next.js", icon: <Github/> },
	{ label: "Node.js", icon: <Github/> },
	{ label: "Express", icon: <Github/> },
	{ label: "Svelte", icon: <Github/> },
];

const tools = [
	{ label: "Git", icon: <Github/> },
	{ label: "Docker", icon: <Github/> },
	{ label: "PostgreSQL", icon: <Github/> },
	{ label: "AWS (Lambda, S3, EC2)", icon: <Github/> },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			{/* Nav items */}
			<nav className="text-center animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-3xl duration-500 text-zinc-500 hover:text-green-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

			{/* Super Extra name section w/ sparkles */}
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Savannah Smith
			</h1>

			{/* Resume Download Section */}
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="text-center animate-fade-in" style={{ margin: "10px" }}>
				<h2 className="text-sm text-zinc-500 ">
					Download my{" "}
					<a
						href="https://savannah-smith.is-a.dev/Savannah_Smith_Software_Engineer.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-300 hover:text-green-100 underline underline-offset-2"
					>
						resume here.
					</a>{" "}
					Last updated July 2025.
				</h2>
			</div>

			{/* Coding Languages Section */}
			<div className="w-full text-center animate-fade-in margin-top: 20px">
				{/* Interest cards w/ woooords*/}
				<div className="grid w-full max-w-l grid-cols-2 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4 p-4">
					{coding_languages.map((cl) => (
						<Card key={cl.label}>
							<div className="flex flex-col items-center gap-2 p-4 max-w-[100px] mx-auto">
								{cl.icon && <div className="text-zinc-200">{cl.icon}</div>}
								<h3 className="text-lg font-semibold text-zinc-200">
									{cl.label}
								</h3>
							</div>
						</Card>
					))}
				</div>
        <div className="grid w-full max-w-1xl grid-cols-2 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 p-4">
					{frameworks.map((f) => (
						<Card key={f.label}>
							<div className="flex flex-col items-center gap-2 p-4 max-w-[100px] mx-auto">
								{f.icon && <div className="text-zinc-200">{f.icon}</div>}
								<h3 className="text-lg font-semibold text-zinc-200">
									{f.label}
								</h3>
							</div>
						</Card>
					))}
				</div>
        <div className="grid w-full max-w-1xl grid-cols-2 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:grid-cols-4 lg:gap-4 p-4">
					{tools.map((t) => (
						<Card key={t.label}>
							<div className="flex flex-col items-center gap-2 p-4 max-w-[100px] mx-auto">
								{t.icon && <div className="text-zinc-200">{t.icon}</div>}
								<h3 className="text-lg font-semibold text-zinc-200">
									{t.label}
								</h3>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
