'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import Lottie from 'react-lottie-player';
import Image from 'next/image';
import EntireState from "@/app/lottie/performance/entire state new (1).json";
import { GradientLeft } from '@/app/assets/svgIcons/svg';
import Rightgradient from '@/app/assets/images/rightside.svg';

function page() {
  return (
    <div className='relative text-center px-3 py-10'>
      <div className='w-full'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex flex-col gap-5 max-w-[550px] mx-auto'>
            <TopDotLine />
            <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>Deoxys Performance</h1>
            <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
          </div>
          {/* grid system */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left pt-14 overflow-hidden">
            <div className="col-span-2 bg-gray border border-card rounded-card">
              <div className='max-w-[310px] p-[20px]'>
                <h3 className='text-16'>Entire state 1</h3>
                <p className='text-dullWhite text-14 pt-1'>With full support for Starknet&apos;s JSON-RPC specs, Deoxys efficiently handle.. .</p>
              </div>
              <div className=''>
                <Lottie
                  loop
                  animationData={EntireState}
                  play
                  style={{ height: '100%', width: '100%', }}
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gray border border-card rounded-card max-h-[340px]">
              <div className='max-w-[310px] p-[20px]'>
                <h3 className='text-16'>Entire state 2</h3>
                <p className='text-dullWhite text-14 pt-1'>With full support for Starknet&apos;s JSON-RPC specs, Deoxys efficiently handle.. .</p>
              </div>
              <div className=''>
                <Lottie
                  loop
                  animationData={EntireState}
                  play
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gray border border-card rounded-card max-h-[340px]">
              <div className='max-w-[310px] p-[20px]'>
                <h3 className='text-16'>Entire state 3</h3>
                <p className='text-dullWhite text-14 pt-1'>With full support for Starknet&apos;s JSON-RPC specs, Deoxys efficiently handle.. .</p>
              </div>
              <div className=''>
                <Lottie
                  loop
                  animationData={EntireState}
                  play
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gray border border-card rounded-card max-h-[340px]">
              <div className='max-w-[310px] p-[20px]'>
                <h3 className='text-16'>Entire state4</h3>
                <p className='text-dullWhite text-14 pt-1'>With full support for Starknet&apos;s JSON-RPC specs, Deoxys efficiently handle.. .</p>
              </div>
              <div className=''>
                <Lottie
                  loop
                  animationData={EntireState}
                  play
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gray border border-card rounded-card max-h-[340px]">
              <div className='max-w-[310px] p-[20px]'>
                <h3 className='text-16'>Entire state 5</h3>
                <p className='text-dullWhite text-14 pt-1'>With full support for Starknet&apos;s JSON-RPC specs, Deoxys efficiently handle.. .</p>
              </div>
              <div className=''>
                <Lottie
                  loop
                  animationData={EntireState}
                  play
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top gradient */}
      <div className="absolute -left-[250px] -top-[300px] w-full flex items-center justify-center">
        <GradientLeft />
      </div>
      <div className='absolute -right-[1050px] -top-[250px] w-full flex items-center justify-center'>
        <Image src={Rightgradient} alt="right-gradient" />
      </div>
    </div>
  )
}

export default page