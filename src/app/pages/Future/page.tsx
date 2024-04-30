'use client'
import React from 'react'
import Image from 'next/image';
import TopDotLine from '@/app/components/topDotLine';
import Lottie from 'react-lottie-player';
import animation from "@/app/lottie/future/future.json";
import { GradientLeft } from '@/app/assets/svgIcons/svg';
import Rightgradient from '@/app/assets/images/rightside.svg';

function page() {
    return (
        <div className='relative text-center px-3 sm:px-0 py-20 sm:py-28 overflow-hidden'>
            <div className=''>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex flex-col gap-5 max-w-[550px] mx-auto'>
                        <TopDotLine />
                        <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>How Deoxys Operates the Future of Starknet</h1>
                        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
                    </div>
                    <div className='flex items-center justify-center -mt-6 sm:-mt-32'>
                        <Lottie
                            loop
                            animationData={animation}
                            play
                            style={{ height: '100%', width: '100%', }}
                        />
                    </div>
                    {/* bottom guide */}
                    <div className='text-15 flex justify-between items-center max-w-[600px] mx-auto font-normal -mt-6 sm:-mt-24 border-2 border-[#000] px-3 py-2'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#2EC596] h-2.5 w-12 rounded-sm'></div>
                            <p>State Update</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#B6383C] h-2.5 w-12 rounded-sm'></div>
                            <p>Commitment</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#C1791D] h-2.5 w-12 rounded-sm'></div>
                            <p>Block</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* top gradient */}
            <div className='absolute -left-[250px] -top-[100px] w-full flex items-center justify-center'>
                <GradientLeft />
            </div>
            <div className='absolute -right-[1050px] -top-[250px] w-full flex items-center justify-center'>
            <Image src={Rightgradient} alt="right-gradient" />
            </div>
        </div>
    )
}

export default page