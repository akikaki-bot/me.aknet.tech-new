"use client";
import Image from "next/image";
import { FadeInBottom } from "./fadeInBottom";
import { Box } from "./box";



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
                    <Box className="hover:bg-sky-50">
                        <Image src="/icons/react.svg" width={24} height={24} alt="react's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">React.js</p>
                    </Box>
                    <Box className="hover:bg-purple-50">
                        <Image src="/icons/next.svg" width={24} height={24} alt="next's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 font-bold">Next.js</p>
                    </Box>
                    <Box className="hover:bg-blue-50"> 
                        <Image src="/icons/typescript.svg" width={24} height={24} alt="typescript's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 font-bold">TypeScript</p>
                    </Box>
                    <Box className="hover:bg-yellow-50">
                        <Image src="/icons/javascript.svg" width={24} height={24} alt="javascript's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">JavaScript</p>
                    </Box>
                    <Box className="hover:bg-green-50">
                        <Image src="/icons/nodejs.svg" width={24} height={24} alt="nodejs's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 font-bold">Node.js</p>
                    </Box>
                </FadeInBottom>
            </div>
        </div> 
    )
}
