import Image from "next/image";
import Link from "next/link";


export function AboutMe(){
    return (
        <div className="flex flex-col h-full w-full text-center justify-center items-center backdrop-blur-lg rounded-xl z-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold">
                    <span className="text-yellow-300 text-stroke-px text-stroke-black">About</span> me
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            </div>
        </div> 
    )
}