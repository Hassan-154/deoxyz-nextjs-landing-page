'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import Lottie from 'react-lottie-player';
import animation from "@/app/lottie/performance/entire state new (1).json";
function page() {
  return (
    <div>
        <TopDotLine/>
        <h1 className='text-[50px] font-medium leading-[55px]'>How Deoxys Operates the Future of Starknet</h1>
        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
        <Lottie
          loop
          animationData={animation}
          play
          className='lottie'
          style={{ height: '100vh', width: '100%',  objectFit: 'cover' }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
    </div>
  )
}

export default page