import React from 'react'
import Image from "next/image";
import '@/app/style/navbar.css'
import launchLogo from '@/app/assets/images/lunch-button.svg'
import RedEye from '@/app/assets/images/RedEyesV3.svg'
function navbar() {
    return (
        <nav className=" absolute z-30 left-0 right-0 mx-auto mt-12  min-w-[361px] md:max-w-3xl lg:max-w-4xl h-[60px] px-2 py-1.5 bg-zinc-600 bg-opacity-20 rounded-xl shadow border-2 border-white border-opacity-10 backdrop-blur-sm justify-between items-center inline-flex">
            <div className="flex justify-between items-center w-full">
                <Image src={RedEye} alt="logo" width={65} height={44} className="object-cover" />
                <ul className=" hidden md:flex text-sm text-white md:gap-6 font-normal">
                    <li>Home</li>
                    <li>Architecture</li>
                    <li>Performance</li>
                    <li>How it works</li>
                    <li>FAQ</li>
                </ul>
                <button
                    className='flex w-22 h-full py-2.5 px-5  bg-white bg-gradient-to-b from-white/30 to-[#1B1A1A]/30 rounded-lg gap-2.5 justify-center items-center border border-1 border-black'
                >
                    <p className="text-zinc-900  text-sm font-medium  leading-tight">Launch App</p>
                    <Image src={launchLogo} alt="arrow" width={17.73} height={20.35} className="object-cover" />
                </button>
            </div>
        </nav>
    )
}

export default navbar