'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sliderLogo from '@/app/utility/data';

function LogoSlider() {
    const [logos, setLogos] = useState<string[]>([]);

    useEffect(() => {
        if (sliderLogo.images) {
            setLogos(sliderLogo.images);
        }
    }, []);

    console.log(logos);

    return (
        <div className="z-10 w-full bg-[#040201] flex flex-col items-center justify-center text-center text-white overflow-hidden">
            <div className="flex flex-col items-center justify-start gap-[48px] overflow-x-hidden">
                <div className="">Supported by</div>
                <div className='w-full flex flex-row gap-[150px] overflow-x-auto scrollContainer'>
                    {logos.map((logo, index) => (
                        <div key={index} className="max-w-[250px] h-auto">
                            <Image src={logo} alt='w-72 h-auto' width={180} height={100} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogoSlider;
