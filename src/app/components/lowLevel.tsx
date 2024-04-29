import React from 'react';
import TopDotLine from '@/app/components/topDotLine';
import Button from '@/app/components/button';
import window from '@/app/assets/images/windows-fill.svg'
import apple from '@/app/assets/images/apple-fill.svg'
import linux from '@/app/assets/images/linux.svg'
import Image from 'next/image';
import GreenToggle from '@/app/assets/images/toggle-green.svg'
import WhiteToggle from '@/app/assets/images/Togglew-white.svg'
import LaunchLogo from '@/app/assets/images/lunch-button.svg'
import LaunchbackLines from '@/app/assets/images/launch-backLines.svg';


function Page() {
    return (
        <div className='relative text-center px-3 pt-8 overflow-hidden'>
            <div className=''>
                <div className='flex flex-col gap-8 max-w-[750px] mx-auto'>

                    <div className='relative overflow-hidden'>
                        <div className='flex flex-col sm:flex-row gap-5  bg-gray border border-card rounded-[15px] text-left p-6 pr-8 '>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                01
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem. </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-[300px] sm:max-w-[480px]">
                                    <Button className='lunch-button max-w-[135px] font-normal' text='Download' imgSrc={window} altText="Image alt text" />
                                    <Button className='lunch-button max-w-[135px] font-normal' text='Download' imgSrc={apple} altText="Image alt text" />
                                    <Button className='lunch-button max-w-[135px] font-normal' text='Download' imgSrc={linux} altText="Image alt text" />
                                </div>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>

                    <div className='relative overflow-hidden'>
                        <div className='flex flex-col sm:flex-row gap-5 bg-gray border border-card rounded-[15px] text-left p-6 pr-8'>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                02
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem. </p>
                                <div className='flex flex-row text-center'>
                                    <div>
                                        <h5 className='text-yellow'>Window</h5>
                                        <div className='mt-1.5 h-[2px] w-full min-w-[90px] sm:min-w-[130px] bg-yellow'></div>
                                    </div>
                                    <div>
                                        <h5 className=''>MacOS</h5>
                                        <div className='mt-1.5 h-[2px] w-full min-w-[90px] sm:min-w-[130px] bg-light-gray'></div>
                                    </div>
                                    <div>
                                        <h5 className=''>Linux</h5>
                                        <div className='mt-1.5 h-[2px] w-full min-w-[90px] sm:min-w-[130px] bg-light-gray'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 installCardOptions p-4 rounded-[15px]'>
                                    <p>Ready to install.. .</p>
                                    {/* 3 lines */}
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <div className='bg-[#D9D9D9] opacity-25 w-full max-w-[350px] h-4 rounded-full'></div>
                                        <div className='bg-[#D9D9D9] opacity-25 h-4 rounded-full'></div>
                                        <div className='bg-[#D9D9D9] opacity-25 h-4 rounded-full'></div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className=' text-yellow border border-yellow rounded-md text-14 font-normal py-1.5 px-4'>Instal Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex flex-col sm:flex-row gap-5 bg-gray border border-card rounded-[15px] text-left p-6 pr-8'>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                03
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus <span className='text-green underline'>read more</span> </p>
                                <div className='flex flex-row text-center'>
                                    <div>
                                        <h5 className='text-yellow'>Window</h5>
                                        <div className='mt-1.5 h-[2px] w-full min-w-[90px] sm:min-w-[130px] bg-yellow'></div>
                                    </div>
                                    <div>
                                        <h5 className=''>MacOS</h5>
                                        <div className='mt-1.5 h-[2px] w-full min-w-[90px] sm:min-w-[130px] bg-light-gray'></div>
                                    </div>
                                    <div>
                                        <h5 className=''>Linux</h5>
                                        <div className='mt-1.5 h-[2px] w-full min-w-[90px] sm:min-w-[130px] bg-light-gray'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 installCardOptions p-4 rounded-[15px]'>
                                    <p className='text-green'>Setup customize</p>
                                    {/* 3 lines */}
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <div className='flex gap-2'>
                                            <Image className='min-w-[32px]' src={GreenToggle} alt="top-gradient" />
                                            <div className='bg-[#D9D9D9] opacity-25 w-full max-w-[250px] sm:max-w-[350px] h-4 rounded-full'></div>
                                        </div>
                                        <div className='flex gap-3 -ml-[4px]'>
                                            <Image className='min-w-[32px]' src={WhiteToggle} alt="top-gradient" />
                                            <div className='bg-[#D9D9D9] opacity-25 w-full h-4 rounded-full'></div>
                                        </div>
                                        <div className='flex gap-3 -ml-[4px]'>
                                            <Image className='min-w-[32px]' src={WhiteToggle} alt="top-gradient" />
                                            <div className='bg-[#D9D9D9] opacity-25 w-full max-w-[250px] sm:max-w-[350px] h-4 rounded-full'></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className=' text-green border border-green rounded-md text-14 font-normal py-1.5 px-4'>Instal Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex flex-col gap-5 bg-gray border border-card rounded-[15px] text-left p-6 pr-8'>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                04
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus</p>
                            </div>
                            <div className='max-w-[150px] gap-3 flex item-center lunch-button rounded-lg px-3 py-2.5 font-semibold bg-white text-black'>
                                <h5 className='text-black'> Launch App</h5>
                                <Image src={LaunchLogo} alt="logo" />
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page;
