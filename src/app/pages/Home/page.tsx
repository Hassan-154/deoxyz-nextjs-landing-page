'use client';
import Image from 'next/image';
import React from "react";
import Lottie from 'react-lottie-player';
import animation from "@/app/lottie/home//section1Hero.json";
import gradient from '@/app/assets/images/Rectangle 34631737.png';
import Button from '@/app/components/button';
import TopDotLine from '@/app/components/topDotLine';

export default function Page() {
  return (
    <div className='relative h-[140vh]'>
      <Lottie
        loop
        animationData={animation}
        play
        className='lottie'
        style={{ height: '140vh', width: '100%', objectFit: 'cover' }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
      {/* content */}
      <div className='z-10 flex flex-col gap-5 absolute top-[35%] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[550px] px-3 sm:px-0'>
        {/* dot & text */}
        <TopDotLine />
        <h1 className='text-[40px] leading-[44px] font-semibold sm:text-[60px] sm:leading-[65px]'>Powring The <br></br> Future of StarKnet</h1>
        <p className='text-dullWhite text-16'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
        <div className='flex gap-4 justify-center'>
          <Button className='bg-[#B10000] bg-gradient-to-b from-white/30 to-[#1B1A1A]/0 px-6' text='Get Started' />
          <Button className='bg-offWhite text-black px-6' text='Learn More' />
        </div>
      </div>
      {/* top gradient */}
      <div className='w-full z-0 absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Image src={gradient} alt="top-gradient" />
      </div>
    </div>
  );
}
