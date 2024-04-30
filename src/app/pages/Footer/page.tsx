'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import Button from '@/app/components/button';
import { FooterGradient } from '@/app/assets/svgIcons/svg';


function page() {
    return (
        <div className='text-center px-3 mt-24 overflow-hidden footer'>
            <div className='flex flex-col justify-between max-w-[1400px] h-[70vh] mx-auto'>
                <div className='w-full flex-col items-center justify-center'>
                    <div className='flex flex-col gap-5 max-w-[600px] mx-auto'>
                        <h1 className='text-[40px] leading-[44px] font-semibold sm:text-[60px] sm:leading-[65px] pt-5'>Ready to Experience Deoxys?</h1>
                        <p className='text-dullWhite'>Contribute to Deoxys&apos; development on GitHub and be part of the future!</p>
                        <div className='flex gap-4 justify-center'>
                            <Button className='bg-[#B10000] bg-gradient-to-b from-white/30 to-[#1B1A1A]/0 px-5' text='Download' />
                            <Button className='bg-offWhite text-black px-5' text='Learn More' />
                        </div>
                    </div>
                </div>

                <div style={{ background: 'rgba(32, 32, 32, 0.90)' }} className='font-normal mb-4 flex flex-col text-left sm:flex-row gap-5 sm:gap-0 sm:justify-between border shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] backdrop-blur-[2px] px-3 py-4 rounded-md border-solid border-[rgba(255,255,255,0.20)]'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <a>© 2024 DEOXYS| All Rights Reserved</a>
                        <div className='flex gap-4'>
                            <a className='text-[#9a9a9a]'> | </a>
                            <a className='text-[#9a9a9a]'>Powered by Kazar Labs</a>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-4'>
                        <a>Privacy Policy</a>
                        <a>Terms and Conditions</a>
                        <a>Cookie Settings</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default page;
