'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import Image from 'next/image';
import fullyUpdated from '@/app/assets/images/fully-updaed.png'
import fullyStar from '@/app/assets/images/fully-star.png'
import RCP from '@/app/assets/images/rcp.png'
import RCPTOP from '@/app/assets/images/rcp-top.svg'
import L1verify from '@/app/assets/images/LIverify.svg'
import Numberdeco from '@/app/assets/images/numberdeco.svg'
import loading from '@/app/assets/images/loading.svg'
import World from '@/app/assets/images/worlddeco.svg'
import { FeaturesBentoGradient, GradientRight } from '@/app/assets/svgIcons/svg';

function page() {
    return (
        <div className='relative text-center px-3 py-20 overflow-hidden'>
            <div className=''>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex flex-col gap-5 max-w-[550px] mx-auto'>
                        <TopDotLine />
                        <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>How Deoxys Operates the Future of Starknet</h1>
                        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
                    </div>
                    {/* bento */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 text-left pt-14">
                        <div className="col-span-2 lg:col-span-3 bg-gray border border-card rounded-card">
                            <div className='max-w-[510px] p-[20px]'>
                                <h3 className='text-17 font-medium'>Fully Updated</h3>
                                <p className='text-dullWhite text-14 pt-1'>Deoxys syncs seamlessly with Starknet&apos;s latest, offering full compatibility with version 0.13.0.</p>
                            </div>
                            <div className='relative'>
                                <div className='max-w-[550px] max-h-[400px] mx-auto overflow-hidden'><Image className='' src={fullyUpdated} alt="lines" /></div>
                                <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0'>
                                    <div className='max-w-[500px] h-auto'> <Image src={fullyStar} alt="card" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 bg-gray border border-card rounded-card">
                            <div className='max-w-[510px] p-[20px]'>
                                <h3 className='text-17 font-medium'>RPC Complete</h3>
                                <p className='text-dullWhite text-14 pt-1'>With full support for Starknet&apos;s JSON-RPC specs, Deoxys efficiently handles all 27 available methods</p>
                            </div>
                            <div className='relative'>
                                <div className='max-w-[550px] max-h-[400px] mx-auto overflow-hidden'><Image className='lg:h-[400px]' src={RCP} alt="lines" /></div>
                                <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0'>
                                    <div className='max-w-[500px] px-3 h-auto'><Image src={RCPTOP} alt="card" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 bg-gray border border-card rounded-card">
                            <div className='max-w-[510px] p-[20px]'>
                                <h3 className='text-17 font-medium'>L1 Verified</h3>
                                <p className='text-dullWhite text-14 pt-1'>Deoxys&apos; state undergoes continuous Ethereum-based verification, ensuring data integrity within the network.</p>
                            </div>
                            <div className='relative'>
                                <div className='max-w-[550px] max-h-[400px] mx-auto overflow-hidden'><Image className='sm:h-[400px]' src={Numberdeco} alt="lines" /></div>
                                <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0'>
                                    <div className='max-w-[500px] px-3 h-auto'><Image src={L1verify} alt="card" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 bg-gray border border-card rounded-card">
                            <div className='max-w-[510px] p-[20px]'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-14 pt-1'>Deoxys&apos; state undergoes continuous Ethereum-based verification, ensuring data integrity within the network.</p>
                            </div>
                            <div className='relative lg:mr-10'>
                                <div className=''><Image src={World} className='h-[400px] w-[100%] object-cover' alt="world" /></div>
                                <div className='w-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0'>
                                    <div className='max-w-[500px] h-auto'> <Image src={loading} alt="loading" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* top gradient */}
            <div className='absolute -left-[200px] -top-[100px] w-full flex items-center justify-center'>
                <FeaturesBentoGradient />
            </div>
        </div>
    )
}

export default page;
