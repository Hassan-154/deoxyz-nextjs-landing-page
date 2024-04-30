'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Data from '@/app/utility/data'; 

export default function LogoList() {

    const [logos, setLogos] = useState<string[]>([]);
    useEffect(() => {
        setLogos(Data.images || []);
    }, []);

    return (
        <div className="w-full bg-[#040201] flex flex-col items-center justify-center pt-[150px] pb-[100px] overflow-hidden">
            <div className="flex flex-col gap-14 overflow-x-hidden">
                <h3 className='text-dullWhite text-center text-xl'>Supported by</h3>
                <div className='flex flex-row gap-[50px] overflow-x-auto scrollContainer'>
                    {logos.map((logo, index) => (
                        <div key={index} className="max-w-[250px] h-auto">
                            <Image className='min-w-[200px]' src={logo} alt={`Logo ${index}`} width={250} height={150} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
