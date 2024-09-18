"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeInBottom } from "./fadeInBottom";
import { Box } from "./box";


export function Teams() {
    return (
        <div className="flex flex-col h-full w-full text-center justify-center items-center rounded-xl z-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold">
                    <span className="text-yellow-200 text-stroke-px text-stroke-black">Learning</span> Techs
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <FadeInBottom>
                    <Box className="hover:bg-sky-50">
                        <Image src="/icons/react.svg" width={24} height={24} alt="react native's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">React Native</p>
                    </Box>
                    <Box className="hover:bg-orange-50">
                        <Image src="/icons/java.svg" width={24} height={24} alt="the programming language java's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">Java</p>
                    </Box>
                    <Box className="hover:bg-yellow-50">
                        <Image src="/icons/python.webp" width={48} height={48} alt="the programming language python's icon" className="w-10 h-10"/>
                        <p className="text-2xl opacity-45 ">Python</p>
                    </Box>
                </FadeInBottom>
            </div>
        </div> 
    )
}