"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeInBottom } from "./fadeInBottom";


export function Title() {
    return (
        <div className="flex flex-col h-full w-full text-center justify-center items-center rounded-xl z-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold">
                    <span className="text-yellow-300 text-stroke-px text-stroke-black">akikaki</span>.net</h1>
                <p className="text-2xl mt-1">Hi there :)</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <FadeInBottom>
                    <Link href="https://x.com/aknmni" aria-label="my X account" className="flex p-2 transform-gpu transition-all duration-500 hover:shadow-lg hover:bg-gray-50 bg-slate-50 rounded-xl justify-between gap-4 items-center shadow-sm bg-opacity-80">
                        <Image src="/icons/x.svg" width={24} height={24} alt="x (a.k.a twitter) icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45">aknmni</p>
                    </Link>
                    <Link href="https://discord.com/users/536489930080256011" aria-label="My discord account!" className="flex p-2 transform-gpu transition-all duration-500 hover:shadow-lg hover:bg-blue-50 bg-slate-50 shadow-sm bg-opacity-50 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/discord.svg" width={24} height={24} alt="discord icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45">akikaki</p>
                    </Link>
                    <Link href="https://github.com/akikaki-bot" aria-label="my github account!" className="flex p-2 transform-gpu transition-all duration-500 hover:shadow-lg hover:bg-purple-50 bg-slate-50 shadow-sm bg-opacity-50 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45">akikaki-bot</p>
                    </Link>
                </FadeInBottom>
            </div>
        </div> 
    )
}