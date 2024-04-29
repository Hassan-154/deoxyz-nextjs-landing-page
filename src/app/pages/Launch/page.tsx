'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import Image from 'next/image';
import Discoverlines from '@/app/assets/images/discoverLines.svg'
import Monitor from '@/app/assets/images/monitor.png'
import { FeaturesBentoGradient } from '@/app/assets/svgIcons/svg';


function page() {
    return (
        <div className='relative text-center px-3 py-20 overflow-hidden'>
            <div className=''>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex flex-col gap-5 max-w-[600px] mx-auto'>
                        <TopDotLine />
                        <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>Launch Your App with Deoxys</h1>
                        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
                    </div>
                 {/* tabs */}
                   
                </div>
            </div>
            {/* top gradient */}
            <div className='absolute -left-[200px] -top-[350px] w-full flex items-center justify-center'>
                <FeaturesBentoGradient />
            </div>
        </div>
    )
}

export default page;
