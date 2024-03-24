"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeInBottom } from "./fadeInBottom";


export function Title() {
    return (
        <div className="flex flex-col h-full w-full text-center justify-center items-center rounded-xl z-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold">
                    <span className="text-yellow-300 text-stroke-px text-stroke-black">me</span>.aknet.tech</h1>
                <p className="text-2xl">あきかき</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <FadeInBottom>
                    <Link href="https://x.com/aknmni" className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/x.svg" width={24} height={24} alt="x's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45">aknmni</p>
                    </Link>
                    <Link href="https://discord.com/users/536489930080256011" className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/discord.svg" width={24} height={24} alt="discord's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45">akikaki</p>
                    </Link>
                    <Link href="https://github.com/akikaki-bot" className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45">akikaki-bot</p>
                    </Link>
                </FadeInBottom>
            </div>
        </div> 
    )
}