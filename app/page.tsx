import { BackgroundTexts } from "@/components/backgroundTexts";
import { Skills } from "@/components/skills";
import { Teams } from "@/components/teams";
import { Title } from "@/components/title";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col overflow-clip">
			<div className="absolute top-0 left-0 text-7xl sm:text-8xl font-bold text-gray-50 text-opacity-70 text-stroke-px max-h-[99vh] w-screen overflow-hidden">
				<BackgroundTexts />
			</div>
			<div className="animate-fade-in-opacity absolute top-0 left-0 min-w-full flex min-h-screen flex-col items-center justify-center z-10  p-6 sm:p-12 lg:p-24 gap-5">
				<Title />
				<Skills />
			</div>
		</main>
	);
}
