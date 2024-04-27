'use client'
import React from 'react'
import Image from 'next/image';
import TopDotLine from '@/app/components/topDotLine';
import Lottie from 'react-lottie-player';
import animation from "@/app/lottie/future/future.json";
import gradient from '@/app/assets/images/Rectangle 34631737.png';
function page() {
    return (
        <div className='relative text-center px-3 sm:px-0 mt-[90vh] pb-10'>
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
                        className='lottie'
                    />
                </div>
                 {/* bottom guide */}
              <div className='flex justify-between items-center max-w-[700px] mx-auto font-normal -mt-6 sm:-mt-24 border-2 border-[#000]'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#2EC596] h-3 w-14 rounded-sm'></div>
                    <p>State Update</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#B6383C] h-3 w-14 rounded-sm'></div>
                    <p>Commitment</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#C1791D] h-3 w-14 rounded-sm'></div>
                    <p>Block</p>
                </div>
            </div>
            </div>
            {/* top gradient */}
            {/* <div className='w-full z-1 absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Image src={gradient} alt="top-gradient" className='mr-72' />
            </div> */}

        </div>
    )
}

export default page