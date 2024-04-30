'use client'
import React from 'react'
import TopDotLine from '@/app/components/topDotLine';
import { FeaturesBentoGradient } from '@/app/assets/svgIcons/svg';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Data from '@/app/utility/data'

function page() {
    return (
        <div className='relative text-center px-3 py-20 overflow-hidden'>
            <div className='z-10'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex flex-col gap-5 max-w-[600px] mx-auto'>
                        <TopDotLine />
                        <h1 className='text-[38px] leading-[40px] sm:text-[42px] font-medium sm:leading-[45px]'>Discover the Advantages</h1>
                        <p className='text-dullWhite'>Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi</p>
                    </div>
                    {/* tabs */}
                    <Accordion className='mt-14' type="single" collapsible>
                        {Data.faq.map((item) => (
                            <AccordionItem key={item.id} value={`item-${item.id}`} className='!border-none bg-gray px-3 text-left rounded-xl mt-6'>
                                <AccordionTrigger className="!no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className='text-dullWhite'>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            {/* top gradient */}
            <div className='z-0 absolute -left-[200px] -top-[800px] w-full flex items-center justify-center'>
                <FeaturesBentoGradient />
            </div>
        </div>
    )
}

export default page;
