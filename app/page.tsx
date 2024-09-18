"use client";
import { ParticlesBackGround } from "@/components/particles";
import { Skills } from "@/components/skills";
import { Teams } from "@/components/teams";
import { Title } from "@/components/title";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			{  <ParticlesBackGround />  }
			<div className="absolute top-0 left-0 min-w-full flex min-h-screen flex-col items-center justify-center z-10  p-6 sm:p-12 lg:p-24 gap-5">
				<Title />
				<Skills />
				<Teams />
			</div>
		</main>
	);
}
