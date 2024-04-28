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
                <div className='max-w-[800px] mx-auto'>
                    <div className='flex flex-col gap-5 max-w-[550px] mx-auto'>
                        <TopDotLine />
                        <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>Discover the Advantages</h1>
                        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
                    </div>
                    {/* grid stytem */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-14">
                        <div className="col-span-1 bg-gray border border-card rounded-card">
                            <div className='max-w-[200px] mx-auto text-center pb-8'>
                                <div className='relative'>
                                    <Image src={Discoverlines} className='mx-auto' alt="lines" />
                                    <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 max-w-[115px] h-auto mx-auto'><Image src={Monitor} className='' alt="lines" /></div>
                                </div>
                                <h3 className='text-17 font-medium'>Monitor with precision</h3>
                                <p className='text-dullWhite text-14 pt-1'>Seamlessly monitor your node&apos;s health and network activity in real-time.</p>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray border border-card rounded-card">
                            <div className='max-w-[200px] mx-auto text-center pb-8'>
                                <div className='relative'>
                                    <Image src={Discoverlines} className='mx-auto' alt="lines" />
                                    <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 max-w-[115px] h-auto mx-auto'><Image src={Monitor} className='' alt="lines" /></div>
                                </div>
                                <h3 className='text-17 font-medium'>One-Click Setup</h3>
                                <p className='text-dullWhite text-14 pt-1'>Easily deploy your full node with a simple, user-friendly application.</p>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray border border-card rounded-card">
                            <div className='max-w-[200px] mx-auto text-center pb-8'>
                                <div className='relative'>
                                    <Image src={Discoverlines} className='mx-auto' alt="lines" />
                                    <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 max-w-[115px] h-auto mx-auto'><Image src={Monitor} className='' alt="lines" /></div>
                                </div>
                                <h3 className='text-17 font-medium'>Real-time Insights</h3>
                                <p className='text-dullWhite text-14 pt-1'>Dive into your node&apos;s live status and operations with our sleek TUI.</p>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray border border-card rounded-card">
                            <div className='max-w-[200px] mx-auto text-center pb-8'>
                                <div className='relative'>
                                    <Image src={Discoverlines} className='mx-auto' alt="lines" />
                                    <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 max-w-[115px] h-auto mx-auto'><Image src={Monitor} className='' alt="lines" /></div>
                                </div>
                                <h3 className='text-17 font-medium'>Unlock Expertise</h3>
                                <p className='text-dullWhite text-14 pt-1'>Master your node with our straightforward, detailed guides.</p>
                            </div>
                        </div>
                    </div>
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
