"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeInBottom } from "./fadeInBottom";


export function Teams() {
    return (
        <div className="flex flex-col h-full w-full text-center justify-center items-center rounded-xl z-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold">
                    <span className="text-yellow-200 text-stroke-px text-stroke-black">Belonged</span> Teams
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FadeInBottom>
                    <Link href="https://sdev.shizen.lol" className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/sdev.png" width={128} height={128} alt="s-server-developers's icon" className="w-10 h-10 rounded-full"/>
                        <p className="text-2xl opacity-45 font-bold">S-Server-Developers</p>
                    </Link>
                </FadeInBottom>
            </div>
        </div> 
    )
}