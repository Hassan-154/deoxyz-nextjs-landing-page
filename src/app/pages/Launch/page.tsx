'use client'
import React, { useState } from 'react';
import TopDotLine from '@/app/components/topDotLine';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HighLevel from '@/app/components/highLevel'
import LowLevel from '@/app/components/lowLevel'
import MidLevel from '@/app/components/midLevel'
import { LaunchLowLevelGradient } from '@/app/assets/svgIcons/svg';
import Stars from '@/app/assets/images/stars.svg';
import Image from 'next/image';


function Page() {
    const [activeTab, setActiveTab] = useState<string>("High Level");
    return (
        <div className='relative text-center px-3 py-20 overflow-hidden'>
            <div className=''>
                <div className='z-10'>
                    <div className='flex flex-col gap-5 max-w-[600px] mx-auto'>
                        <TopDotLine />
                        <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>Launch Your App with Deoxys</h1>
                        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
                    </div>
                    {/* tabs */}
                    <Tabs defaultValue={activeTab} className="tabs cursor-pointer mt-14">
                        <TabsList className='!bg-[#1e1e1e] !rounded-[12px] !py-2.5 !h-12 !text-white'>
                            <TabsTrigger value="Low Level" onClick={() => setActiveTab("Low Level")} className="z-20 h-10 w-28 !rounded-[12px]">Low Level</TabsTrigger>
                            <TabsTrigger value="Mid Level" onClick={() => setActiveTab("Mid Level")} className="z-20 h-10 w-28 !rounded-[12px]">Mid Level</TabsTrigger>
                            <TabsTrigger value="High Level" onClick={() => setActiveTab("High Level")} className="z-20 h-10 w-28 !rounded-[12px]">High Level</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Low Level" className="z-99"><LowLevel /></TabsContent>
                        <TabsContent value="Mid Level" className="z-10"><MidLevel /></TabsContent>
                        <TabsContent value="High Level" className="z-10"><HighLevel /></TabsContent>
                    </Tabs>
                </div>
            </div>
            {/* top gradient */}
            <div className='z-0 absolute -left-[250px] -top-[350px] w-full flex items-center justify-center'>
                <LaunchLowLevelGradient />
            </div>
            {
                (activeTab === 'Low Level' || activeTab === 'Mid Level') && (
                    <div className='z-0 absolute -left-[550px] -top-[150px] w-full flex items-center justify-center'>
                        <Image src={Stars} alt="stars" />
                    </div>
                )
            }
        </div>
    );
}

export default Page;
