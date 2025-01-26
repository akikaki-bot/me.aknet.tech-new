"use client";
import { ParticlesBackGround } from "@/components/particles";
import { Skills } from "@/components/skills";
import { Teams } from "@/components/teams";
import { Title } from "@/components/title";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col overflow-clip">
			{  /* <ParticlesBackGround /> */  }
			<div className="absolute top-0 left-0 text-7xl sm:text-8xl font-bold text-gray-50 text-opacity-70 text-stroke-px max-h-[99vh] w-screen overflow-hidden">
				{ Array.from({ length: 250 }).map((_,i) => 
					<span 
						key={i}
						className="animate-random-to-white"
						style={{
							opacity: `${Math.random() * 0.5 + 0.1}`,
							animationDelay: `${i * 0.0075}s`,
						}}
					>
						{
							((i + 1) == 1 || (i + 1) % 5 == 0) ? "あ" :
							((i + 1) % 2 == 0 || (i + 1) % 4 == 0) ? "き" :
							"か"
						}
					</span>
				) }
			</div>
			<div className="animate-fade-in-opacity absolute top-0 left-0 min-w-full flex min-h-screen flex-col items-center justify-center z-10  p-6 sm:p-12 lg:p-24 gap-5">
				<Title />
				<Skills />
				<Teams />
			</div>
		</main>
	);
}
