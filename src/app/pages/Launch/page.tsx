'use client'
import React, { useState } from 'react';
import TopDotLine from '@/app/components/topDotLine';
import LaunchbackLines from '@/app/assets/images/launch-backLines.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LowLevel from '@/app/components/lowLevel'
import { LaunchLowLevelGradient } from '@/app/assets/svgIcons/svg';
import Image from 'next/image';

function Page() {
    const [activeTab, setActiveTab] = useState<string>("Low Level");

    console.log(activeTab, 'active tab.. .')

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
                        <TabsList>
                            <TabsTrigger value="account" onClick={() => setActiveTab("Low Level")} className="z-20">Low Level</TabsTrigger>
                            <TabsTrigger value="password" onClick={() => setActiveTab("Mid Level")} className="z-20">Mid Level</TabsTrigger>
                            <TabsTrigger value="security" onClick={() => setActiveTab("High Levely")} className="z-20">High Level</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="z-99"><LowLevel /></TabsContent>
                        <TabsContent value="password" className="z-10">Change your password here.</TabsContent>
                        <TabsContent value="security" className="z-10">Manage your security settings here.</TabsContent>
                    </Tabs>
                </div>
            </div>
            {/* top gradient */}
            <div className='z-0 absolute -left-[200px] -top-[350px] w-full flex items-center justify-center'>
                <LaunchLowLevelGradient />
            </div>
        </div>
    );
}

export default Page;
