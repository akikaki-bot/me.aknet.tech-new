"use client";
import Image from "next/image";
import { FadeInBottom } from "./fadeInBottom";



export function Skills() {
    return (
        <div className="flex flex-col h-full w-full text-center justify-center items-center rounded-xl z-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold">
                    <span className="text-yellow-400 text-stroke-px text-stroke-black">My</span> Skills
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <FadeInBottom>
                    <div className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/react.svg" width={24} height={24} alt="react's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">React.js</p>
                    </div>
                    <div className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/next.svg" width={24} height={24} alt="next's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 font-bold">Next.js</p>
                    </div>
                    <div className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/typescript.svg" width={24} height={24} alt="typescript's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 font-bold">TypeScript</p>
                    </div>
                    <div className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/javascript.svg" width={24} height={24} alt="javascript's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">JavaScript</p>
                    </div>
                    <div className="flex p-2 bg-slate-100 rounded-xl justify-between gap-4 items-center">
                        <Image src="/icons/nodejs.svg" width={24} height={24} alt="nodejs's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 font-bold">Node.js</p>
                    </div>
                </FadeInBottom>
            </div>
        </div> 
    )
}
