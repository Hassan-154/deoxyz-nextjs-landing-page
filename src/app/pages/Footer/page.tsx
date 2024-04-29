'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import Button from '@/app/components/button';
import { FooterGradient } from '@/app/assets/svgIcons/svg';


function page() {
    return (
        <div className='text-center px-3 py-20 overflow-hidden footer max-h-[70vh]'>
            <div className='flex flex-col gap-10 justify-between max-w-[1200px] mx-auto'>
            <div className='w-full flex-col items-center justify-center'>
                <div className='flex flex-col gap-5 max-w-[600px] mx-auto'>
                    <TopDotLine />
                    <h1 className='text-[40px] leading-[44px] font-semibold sm:text-[60px] sm:leading-[65px]'>Ready to Experience Deoxys?</h1>
                    <p className='text-dullWhite'>Contribute to Deoxys' development on GitHub and be part of the future!</p>
                    <div className='flex gap-4 justify-center'>
                        <Button className='bg-[#B10000] bg-gradient-to-b from-white/30 to-[#1B1A1A]/0' text='Get Started' />
                        <Button className='bg-offWhite text-black' text='Learn More' />
                    </div>
                </div>
            </div>
            <div className='shadow-bottomMenu rounded-lg py-3 text-13 footer-nav font-normal px-6 bg-rgb(32, 32, 32, 0.90) border-2 border-dotLine w-full flex flex-col ga lg:gap-0 md:flex-row justify-between'>
                <div className='flex gap-4'>
                    <a>© 2024 DEOXYS| All Rights Reserved</a>
                    <a className='text-[#9a9a9a]'> | </a>
                    <a className='text-[#9a9a9a]'>Powered by Kazar Labs</a>
                </div>
                <div className='flex gap-4'>
                    <a>Privacy Policy</a>
                    <a>Terms and Conditions</a>
                    <a>Cookie Settings</a>
                </div>
            </div>
            </div>
            {/* top gradient */}
            {/* <div className='absolute -top-[50px] w-full flex items-center justify-center'>
                <FooterGradient />
            </div> */}
        </div>
    )
}

export default page;
