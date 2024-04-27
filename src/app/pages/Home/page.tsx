'use client'
import Image from 'next/image';
import React from "react";
import Lottie from 'react-lottie-player'
import animation from "@/app/lottie/home/section1Hero.json"
import dot from '@/app/assets/images/Ellipse 1.png'
import gradient from '@/app/assets/images/Rectangle 34631737.png'
import Button from '@/app/components/button';

export default function Page() {
  return (
    <div className='relative'>
      <Lottie
        loop
        animationData={animation}
        play
        style={{ marginTop: '-70px', }}
      />
      {/* content */}
      <div className='flex flex-col gap-5 absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[550px]'>
        {/* dot & text */}
        <div className="flex items-center justify-center gap-1.5">
          <div className='max-w-[14px] h-auto'><Image src={dot} alt="dot" /></div>
          <p className='text-sm'>Deoxys' state-of-the-art features blockchain</p>
        </div>
        <h1 className='text-[50px] font-medium leading-[55px]'>Powring The <br></br> Future of StarKnet</h1>
        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
        <div className='flex gap-4 justify-center'>
          <Button className='bg-red' text='Get Started' />
          <Button className='bg-offWhite text-black' text='Learn More' />
        </div>
      </div>
      {/* top gradient */}
      <div className='w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Image src={gradient} alt="top-gradient" />
      </div>
    </div>
  );
}
